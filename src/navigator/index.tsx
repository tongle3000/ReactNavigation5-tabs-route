import Detail from '@/pages/Detail';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
    StackNavigationOptions,
    StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import BottomTabs from './BottomTabs2';

type RootStackParamList = {
	BottomTabs: { screen?: string };
	Detail: { id: number };
};

// 路由
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

type Route = RouteProp<RootStackParamList, 'Detail'>;

export type Props = {
	navigation: RootStackNavigation;
	route: Route;
};

// 不显示顶部头部
export const options: StackNavigationOptions = {
	headerShown: false,
};

class Navigator extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<RootStack.Navigator
                    headerMode="float"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit, // 动画效果改变.
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true, // android 可拖动最左边 返回
                        gestureDirection: 'horizontal', // android 水平方向滚动页面
                        headerStyle: {
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                },
                                ios: {
                                    backgroundColor: '#eee',
                                },
                            }),
                            // backgroundColor: 'red',
                        },
                        // headerTitleStyle:{color:'#ffffff'}
                    }}
                >
					<RootStack.Screen
						name="BottomTabs"
						component={BottomTabs}
						options={{
							headerTitle: '首页',
							headerStyle: {
								backgroundColor: '#f4511e',
							},
                            headerTintColor: '#fff',
                            
						}}
					/>
					<RootStack.Screen
						name="Detail"
						component={Detail}
						options={options}
					/>
				</RootStack.Navigator>
			</NavigationContainer>
		);
	}
}
export default Navigator;
