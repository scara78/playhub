import React, { useState } from 'react';
import {
    TextInput,
    Form,
    ThemedView,
} from '../../components';
import { useSelector, useDispatch } from "react-redux";
import { getAppTheme } from "../../redux/reducers";
import { User} from '../../services';
import { UPDATE_USER } from "../../redux/types";

const PremiumScreen = ({ navigation }) => {
    const theme = useSelector(state => getAppTheme(state));
    const token = useSelector(state => state.authentication.token);

    const [ premiumKey, setPremiumKey] = useState(null);
    const [ success, setSuccess ] = useState({
        has: false,
        text: 'Unexpected text'
    });

    const [ error, setError ] = useState({
        has: false,
        error: "Unexpected error",
        attributes: []
    });

    const dispatch = useDispatch();

    const handleFormSubmit = async () => {
        User.makePremium(token, { key: premiumKey }).then(({ code, message, attributes, user }) => {
            if (code === 200) {
                setSuccess({
                    has: true,
                    text: message
                });

                setError({
                   has: false,
                   error: ""
                });

                dispatch({
                    type: UPDATE_USER, user: user
                });

                return true;
            }

            setError({
                has: true,
                error: message,
                attributes: attributes
            });
        });
    };

    return (
        <ThemedView>
            <Form
                onSubmit={handleFormSubmit}
                header={'Активация премиума'}
                buttonTitle={'Активировать'}
                headerColor={theme.primaryColor}
                hasError={error.has}
                hasSuccess={success.has}
                flashText={error.has ? error.error : (success.has ? success.text : '')}
            >
                <TextInput
                    value={premiumKey}
                    onChangeText={(key) => setPremiumKey(key)}
                    customErrors={error.attributes}
                    placeholder={'Введите премиум ключ'}
                    label={'Ключ'}
                    inputname={'key'}
                />
            </Form>
        </ThemedView>
    );
};

export default PremiumScreen;
