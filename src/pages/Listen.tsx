import { Props } from '@/navigator';
import React from 'react';
import { Button, Text, View } from 'react-native';


class Listen extends React.Component<Props>{
    onPress=() => {
        const { navigation } =this.props;
        navigation.navigate('Detail',{id:0});
    }
    render() {
        return (
            <View>
                <Text>Listen</Text>
                <Button title="go to Detail" onPress={this.onPress} />
            </View>
        );
    }
}

export default Listen;