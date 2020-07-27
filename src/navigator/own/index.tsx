import { TabParamList } from '@/navigator/own/BottomTabs';
import BottomTabs from '@/navigator/own/BottomTabs';
import Detail from '@/pages/own/Detail';
import Modal from '@/pages/own/Modal';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigationContainer, RouteProp } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
    StackNavigationOptions,
    StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

const options: StackNavigationOptions = {
    headerShown: false,
};

// type 类型别名: 相当于重命名,并给它定义独有的属性, 起到一个约束的作用. 约束泛型的类型.
type RootStackParamList = {
    Home: BottomTabParamList;
    Modal: undefined;
};

type BottomTabParamList = {
    // BottomTabs: TabParamList;
    BottomTabs: { screen?: string };
    Detail: { id: number };
};

const MainStack = createStackNavigator<BottomTabParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

type RootStackNavigation = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList>,
    BottomTabNavigationProp<BottomTabParamList>
>;

type RootRouteProp = RouteProp<BottomTabParamList, 'Detail'>;

export type Props = {
    route: RootRouteProp;
    navigation: RootStackNavigation;
};

function MainStackScreen() {
    return (
        <MainStack.Navigator
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
            <MainStack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={options}
            />
            <MainStack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: true }}
            />
        </MainStack.Navigator>
    );
}

class Navigator extends React.Component<Props> {
    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator
                    headerMode="float"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyleInterpolator:
                            HeaderStyleInterpolators.forUIKit, // 动画效果改变.
                        cardStyleInterpolator:
                            CardStyleInterpolators.forHorizontalIOS,
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
                        // options={{ title: '首页' }}
                        name="Home"
                        component={MainStackScreen}
                        options={options}
                    />
                    <RootStack.Screen
                        options={options}
                        name="Modal"
                        component={Modal}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Navigator;
