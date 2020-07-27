import { RootStackNavigation } from '@/navigator/one';
import React from 'react';
import { Button, Text, View } from 'react-native';

type IProps = {
    navigation: RootStackNavigation;
};

class Home extends React.Component<IProps> {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Detail', {
            id: 200,
        });
    };

    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button title="跳转到详情页1" onPress={this.onPress} />
            </View>
        );
    }
}

export default Home;
