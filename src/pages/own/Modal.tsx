import { Props } from '@/navigator/own';
import React from 'react';
import { Button, Text, View } from 'react-native';

// 方法 1 class <Props>
class ModalScreen extends React.Component<Props> {
    render() {
        const { navigation } = this.props;
        const onPress = () => {
            navigation.navigate('Profile');
        };
        return (
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{ fontSize: 30 }}
                >
                    This is a modal222!
                </Text>
                <Button onPress={onPress} title="go to 发现" />
            </View>
        );
    }
}

// 方法 2 function ({ navigation }: Props)
// function ModalScreen({ navigation }: Props) {
//     const onPress = () => {
//         // @ts-ignore
//         navigation.navigate('Notifications');
//     };
//     return (
//         <View
//             style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
//         >
//             <Text style={{ fontSize: 30 }}>This is a modal111!</Text>
//             <Button onPress={onPress} title="go to 我听" />
//         </View>
//     );
// }

export default ModalScreen;
