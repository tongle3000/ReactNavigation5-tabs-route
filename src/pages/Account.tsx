import { Props } from '@/navigator';
import React from 'react';
import { Button, Text, View } from 'react-native';


class Account extends React.Component<Props>{
    onPress=() => {
        const { navigation } =this.props;
        navigation.navigate('Detail',{
            id:200
        });
    }
    render() {
        return (
            <View>
                <Text>Account</Text>
                <Button title="go to Detail" onPress={ this.onPress } />
            </View>
        );
    }
}

export default Account;