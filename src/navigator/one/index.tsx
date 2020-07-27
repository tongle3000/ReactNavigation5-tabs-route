import BottomTabs from '@/navigator/one/BottomTabs';
import Detail from '@/pages/one/Detail';
import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
    StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

// type 类型别名: 相当于重命名,并给它定义独有的属性, 起到一个约束的作用. 约束泛型的类型.
export type RootStackParamList = {
    BottomTabs:{
        screen?: string;
    };
    Detail: {
        id: number;
    };
};
let Stack = createStackNavigator<RootStackParamList>();

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;


class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
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
                    <Stack.Screen
                        // options={{ title: '首页' }}
                        // options={{ headerShown:false }} // 隐藏头部标题.
                        // tab 的头会一直显示 "首页", 我们现在要改成读取路由的

                        name="BottomTabs"
                        component={BottomTabs}
                    />
                    <Stack.Screen
                        options={{ title: '详情页' }}
                        name="Detail"
                        component={Detail}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Navigator;
