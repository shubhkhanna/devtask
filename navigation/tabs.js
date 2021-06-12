import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search, Create, Community, Profile} from '../screens';
import {TabBarIcon} from '../components';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 70,
          backgroundColor: COLORS.smokeWhite,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon focused={focused} label="Home" icon={icons.home} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                label="Discover"
                icon={icons.search}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                label="Create"
                icon={icons.create}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                label="Community"
                icon={icons.community}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Me"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabBarIcon focused={focused} label="Me" icon={icons.me} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
