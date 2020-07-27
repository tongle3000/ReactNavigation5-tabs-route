import { Props } from '@/navigator/own';
import React from 'react';
import { Button, Text, View } from 'react-native';

function Feed({ navigation }: Props) {
    const onPress = () => {
        navigation.navigate('Detail', {
            id: 333,
        });
    };
    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ fontSize: 30 }}
            >
                Feed232
            </Text>
            <Button onPress={onPress} title="跳转到详情页2" />
        </View>
    );
}

export default Feed;
