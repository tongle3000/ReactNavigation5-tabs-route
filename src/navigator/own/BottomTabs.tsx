import Feed from '@/pages/own/Feed';
import Notifications from '@/pages/own/Notifications';
import Profile from '@/pages/own/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

export type TabParamList = {
    Feed: undefined;
    Notifications: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Feed',
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Notifications',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;
