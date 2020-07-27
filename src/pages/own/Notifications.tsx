import { Props } from '@/navigator/own';
import React from 'react';
import { Button, Text, View } from 'react-native';

function Notifications({ navigation }: Props) {
    const onPress = () => {
        // const { navigation } = this.props;
        navigation.navigate('Modal');
    };
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text style={{ fontSize: 30 }}>Notifications</Text>
            <Button onPress={onPress} title="go to Modal" />
        </View>
    );
}

export default Notifications;
