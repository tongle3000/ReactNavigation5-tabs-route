import { Props } from '@/navigator';
import React from 'react';
import { Button, Text, View } from 'react-native';

function Home({ navigation }: Props) {
    const onPress = () => {
        navigation.navigate('Detail', { id: 99 });
    };
    return (
        <View>
            <Text>Home</Text>
            <Button title="go to Detail" onPress={onPress} />
        </View>
    );
}

export default Home;
