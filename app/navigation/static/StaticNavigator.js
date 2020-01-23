import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Feather';
import { NavigationHeaderComponent, NavigationHeaderLeft, NavigationHeaderTitle } from '../../components';
import { CopyrightScreen, TermsScreen, PrivacyScreen, AboutScreen } from '../../screens';

const StaticNavigation = createMaterialTopTabNavigator({
    CopyrightScreen: {
        screen: CopyrightScreen,
        navigationOptions:{
            tabBarLabel: 'Copyright holders',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    focused={focused}
                    name={'hexagon'} size={20} style={{ color: tintColor}}
                />
            ),
        }
    },
    TermsScreen: {
        screen: TermsScreen,
        navigationOptions:{
            tabBarLabel: 'Terms of Use',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    focused={focused}
                    name={'hexagon'} size={20} style={{ color: tintColor}}
                />
            ),
        }
    },
    PrivacyScreen: {
        screen: PrivacyScreen,
        navigationOptions:{
            tabBarLabel: 'Privacy policy',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    focused={focused}
                    name={'hexagon'} size={20} style={{ color: tintColor}}
                />
            ),
        }
    },
    AboutScreen: {
        screen: AboutScreen,
        navigationOptions:{
            tabBarLabel: 'About',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    focused={focused}
                    name={'hexagon'} size={20} style={{ color: tintColor}}
                />
            ),
        }
    }
}, {
    tabBarOptions: {
        scrollEnabled: true,
        pressColor: '#f0f1f4',
        activeTintColor: '#000',
        inactiveTintColor: '#7e7e7e',
        style: {
            backgroundColor: 'white',
            color: '#000'
        },
        indicatorStyle: {
            borderColor: '#000',
            borderWidth: 1,
        }
    },
});

const StaticNavigator = ({ navigation }) => {
    return (
        <StaticNavigation navigation={ navigation } />
    )
};

StaticNavigator.router = {
    ...StaticNavigation.router,
    getStateForAction: (action, lastState) => {
        return StaticNavigation.router.getStateForAction(action, lastState);
    },
};

StaticNavigator.navigationOptions = ({ navigation }) => {
    return {
        header: (props) => <NavigationHeaderComponent
            titleComponent={<NavigationHeaderTitle title={'Information'} />}
            leftComponent={ <NavigationHeaderLeft /> } {...props}
        />
    };
};


export default StaticNavigator;

export const StaticStackNavigator = createStackNavigator({
    MainPlayHub: {
        screen: StaticNavigation,
    }
}, {
    defaultNavigationOptions: {
        headerTitle: () => (
            <NavigationHeaderTitle title={'Infromation'} />
        ),
        headerLeft: () => (
            <NavigationHeaderLeft />
        ),
    },
});
