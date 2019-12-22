import React from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    SafeAreaView,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";
import Logo from "./components/Logo/Logo";
import BottomContainer from "./components/BottomContainer/BottomContainer";
import styles, { container } from "./style";

const LoginScreenComponent = props => {
    const {
        onPress,
        children,
        loginText,
        loginButtonTextStyle,
        loginButtonBackgroundColor,
        loginBackgorundColor
    } = props;

    function renderLoginButton() {
        return (
            <TouchableOpacity style={styles.loginButtonStyle} onPress={onPress}>
                <Text style={loginButtonTextStyle}>{loginText}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior="position"
            style={container(loginButtonBackgroundColor)}
            keyboardVerticalOffset={-297}
        >
            <View style={ container(loginBackgorundColor) }>

                <View style={styles.blackoverlay}>
                    <SafeAreaView style={styles.safeAreaViewStyle}>
                        <View style={styles.loginContainer}>
                            <Logo {...props} />
                        </View>

                        {children}

                        <BottomContainer {...props} />
                    </SafeAreaView>
                </View>

                {renderLoginButton()}
            </View>
        </KeyboardAvoidingView>
    );
};

LoginScreenComponent.propTypes = {
    loginText: PropTypes.string,
    loginButtonBackgroundColor: PropTypes.string
};

LoginScreenComponent.defaultProps = {
    loginText: "Login",
    loginButtonBackgroundColor: "#282828",
    loginButtonTextStyle: styles.loginButtonTextStyle
};

export default LoginScreenComponent;