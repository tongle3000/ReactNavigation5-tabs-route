import { Props } from '@/navigator';
import React from 'react';
import { Button, Text, View } from 'react-native';

class Found extends React.Component<Props> {
	onPress = () => {
		const { navigation } = this.props;
		navigation.navigate('Detail', { id: 100 });
	};
	render() {
		return (
			<View>
				<Text>Found</Text>
				<Button title="go to Detail" onPress={this.onPress} />
			</View>
		);
	}
}

export default Found;
