import { Props } from '@/navigator';
import React from 'react';
import { Button, Text, View } from 'react-native';



class Detail extends React.Component<Props> {
	onPress =()=> {
		const { navigation } = this.props;
		navigation.navigate('BottomTabs', { screen: 'Account' });
	}
	render() {
		const { route } = this.props;
		return (
			<View>
				<Text>AAAA</Text>
				<Text>{route.params.id}</Text>
				<Button title="go to Account" onPress={this.onPress} />
			</View>
		);
	}
}

export default Detail;
