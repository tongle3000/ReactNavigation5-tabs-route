import Account from '@/pages/Account';
import Found from '@/pages/Found';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, RouteProp, TabNavigationState } from '@react-navigation/native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { RootStackNavigation } from '.';



//
export type BottomTabsParamList = {
	Home: undefined;
	Listen: undefined;
	Found: undefined;
	Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

// type BottomTabsNavigationProp = BottomTabNavigationProp<BottomTabsParamList>;

// 路由
type Route = RouteProp<BottomTabsParamList, 'Home'> & {
	state?: TabNavigationState;
};


interface Props {
	navigation: RootStackNavigation;
	route: Route;
}

// 视频讲的方法1
function getHeaderTitle(route: Route) {
	const routeName = route.state
		? route.state.routes[route.state.index].name
		: route.params?.['screen'] || 'Home'; // 直接screen 报错
	switch (routeName) {
		case 'Home':
			return '首页';
		case 'Listen':
			return '我听';
		case 'Found':
			return '发现';
		case 'Account':
			return '账户';
		default:
			return '首页';
	}
}


class BottomTabs extends React.Component<Props> {
	componentDidUpdate() {
		// componentDidUpdate: 只有 PROPS 发生变化,就会执行这个周期.
		const { navigation, route } = this.props;
		navigation.setOptions({
			title: getHeaderTitle(route),
		});
	}

	render() {
		return (
			<Tab.Navigator
				initialRouteName="Home"
				tabBarOptions={{
					// activeColor: '#f0edf6',
					activeTintColor: '#f86442',
					inactiveBackgroundColor: '#eee', // 背景色
					activeBackgroundColor: '#eee', // 背景色
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: '首页',
						tabBarIcon: ({ color }) => (
							<AntDesign name={'home'} color={color} size={30} />
						),
					}}
				/>
				<Tab.Screen
					name="Listen"
					component={Listen}
					options={{
						tabBarLabel: '我听',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name={'account-music'}
								color={color}
								size={36}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Found"
					component={Found}
					options={{
						tabBarLabel: '发现',
						tabBarIcon: ({ color }) => (
							<MaterialIcons
								name={'find-in-page'}
								color={color}
								size={34}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Account"
					component={Account}
					options={{
						tabBarLabel: '账户',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name={'account'}
								color={color}
								size={36}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		);
	}
}
export default BottomTabs;
