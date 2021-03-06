import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { iOSColors, human } from 'react-native-typography';

import { UserLineItem, IconWrap } from '../../components';
import { Fake } from '../../utils';
import { useSelector } from 'react-redux';
import { getAppTheme } from '../../redux/reducers';

const FollowingScreen = () => {
    const theme = useSelector(state => getAppTheme(state));

    return (
        <View style={[ styles.screenContainer, { backgroundColor: theme.primaryBackgroundColor } ]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={[human.subhead, { marginLeft: 20, marginTop: 5, marginBottom: 10, color: theme.primaryColor }]}>
                    Apparently, he respects them, as he subscribed to them.
                </Text>
                {Fake.users.map((user, index) => {
                    return <UserLineItem
                        key={index}
                        id={index + 1}
                        name={user.user}
                        username={user.userName}
                        image={user.avatar}
                        rightContent={
                            <TouchableOpacity onPress={() => {
                                alert(`Hi, my name is ${user.user}`)
                            }} >
                                <IconWrap name={'more-horizontal'} size={20} />
                            </TouchableOpacity>
                        }
                    />
                })}
            </ScrollView>
        </View>
    );
};

export default FollowingScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: iOSColors.white
    },
});
