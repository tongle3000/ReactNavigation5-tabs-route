import { Props } from '@/navigator/own';
import React from 'react';
import { Button, Text, View } from 'react-native';

function Detail({ navigation, route }: Props) {
    const onPress = () => {
        // navigation.navigate('found');
        navigation.navigate('BottomTabs', { screen:'Profile'});
    };
    return (
        <View>
            <Text>Detail222</Text>
            <Text>{route.params.id}</Text>
            <Button onPress={onPress} title="go to Profile" />
        </View>
    );
}

export default Detail;
