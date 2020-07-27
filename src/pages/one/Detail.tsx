import { RootStackNavigation, RootStackParamList } from '@/navigator/one';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

interface IProps {
    route: RouteProp<RootStackParamList, 'Detail'>;
    navigation: RootStackNavigation;
}

class Detail extends React.Component<IProps> {
// class Detail extends React.Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('BottomTabs', { screen: 'Found' });
        // navigation.navigate('Found');
    };
    render() {
        const { route } = this.props;
        return (
            <View>
                <Text>app a</Text>
                <Text>{route.params.id}</Text>
                <Button title="go to Found" onPress={this.onPress} />
            </View>
        );
    }
}

export default Detail;
