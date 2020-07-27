import { RootStackNavigation } from '@/navigator/one';
import Account from '@/pages/one/Account';
import Found from '@/pages/one/Found';
import Home from '@/pages/one/Home';
import Listen from '@/pages/one/Listen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, TabNavigationState } from '@react-navigation/native';
import React from 'react';

// import { StackNavigationProp} from '@react-navigation/Stack';
export type BottomTabParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

// 定义一个接口, 来接收 2 个属性: route navigation

// & 并且加上内部的.  state就是整个导航器内部的状态.
type Route = RouteProp<BottomTabParamList, 'Home'> & {
    state?: TabNavigationState;
};

interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}

// 写个方法
// 如果没有的话,route.params.screen  || 'Home',  一般走不到这里来,找不到,就指定到 Home,
// 这时要把  RootStackParamList 中的 BottomTabs 的 属性值改成 {screen?: string;}

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

class BottomTabs extends React.Component<IProps> {
    componentDidUpdate() {
        // componentDidUpdate: 只有 PROPS 发生变化,就会执行这个周期.
        const { navigation, route } = this.props;
        navigation.setOptions({
            title: getHeaderTitle(route),
        });
    }

    render() {
        return (// activeTintColor='#f86442'
            <Tab.Navigator initialRouteName="Home"> 
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ tabBarLabel: '首页' }}
                />
                <Tab.Screen
                    name="Listen"
                    component={Listen}
                    options={{ tabBarLabel: '我听' }}
                />
                <Tab.Screen
                    name="Found"
                    component={Found}
                    options={{ tabBarLabel: '发现' }}
                />
                <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{ tabBarLabel: '我的' }}
                />
            </Tab.Navigator>
        );
    }
}
export default BottomTabs;
