import { RootStackNavigation } from '@/navigator/one';
import React from 'react';
import { Button, Text, View } from 'react-native';

type IProps = {
    navigation: RootStackNavigation;
};

class Found extends React.Component<IProps> {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Detail', {
            id: 100,
        });
    };

    render() {
        return (
            <View>
                <Text>Found</Text>
                <Button title="跳转到详情页1" onPress={this.onPress} />
            </View>
        );
    }
}

export default Found;
