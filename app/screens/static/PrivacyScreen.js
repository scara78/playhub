import React from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';
import { iOSUIKit } from "react-native-typography";

import viewStyles from './styles';
import { NavigationHeaderComponent, NavigationHeaderLeft, NavigationHeaderTitle } from "../../components";

const PrivacyScreen = () => {
    return (
        <View style={viewStyles.screenContainer}>
            <View style={viewStyles.header}>
                <View>
                    <Text style={viewStyles.date}>ИНФОРМАЦИЯ</Text>
                    <Text style={iOSUIKit.largeTitleEmphasized}>Политика конфиденциальности</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <WebView source={{ uri: 'http://tv.zikwall.ru/vktv/static/privacy' }} />
            </View>
        </View>
    );
};

PrivacyScreen.navigationOptions = {
    header: (props) => <NavigationHeaderComponent
        titleComponent={<NavigationHeaderTitle title={'Политика конфиденциальности'} />}
        leftComponent={ <NavigationHeaderLeft /> } {...props}
    />
};

export default PrivacyScreen;
