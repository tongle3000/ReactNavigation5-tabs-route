import { Props } from '@/navigator/own';
import React from 'react';
import { Button, Text, View } from 'react-native';

function Profile({ navigation }: Props) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text style={{ fontSize: 30 }}>Profile</Text>
            <Button onPress={() => navigation.goBack()} title="Profile" />
        </View>
    );
}

export default Profile;
