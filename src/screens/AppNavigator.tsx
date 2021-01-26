import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Latest, Learning, Resources, Search, Discussions } from './';
import { HeaderButton, HeaderTitle } from '../components';

const Tab = createBottomTabNavigator();
const LatestStack = createStackNavigator();
const LearningStack = createStackNavigator();
const ResourcesStack = createStackNavigator();
const SearchStack = createStackNavigator();
const DiscussionsStack = createStackNavigator();

function LatestStackScreen() {
  return (
    <LatestStack.Navigator>
      <LatestStack.Screen
        name="Latest"
        component={Latest}
        options={{
          headerTitle: () => <HeaderTitle title="The Latest" />,
          headerLeft: () => <HeaderButton align="left" />,
          headerRight: () => <HeaderButton align="right" />,
        }}
      />
    </LatestStack.Navigator>
  );
}

function LearningStackScreen() {
  return (
    <LearningStack.Navigator>
      <LearningStack.Screen
        name="Learning"
        component={Learning}
        options={{
          headerTitle: () => <HeaderTitle title="Learning" />,
          headerLeft: () => <HeaderButton />,
        }}
      />
    </LearningStack.Navigator>
  );
}

function ResourcesStackScreen() {
  return (
    <ResourcesStack.Navigator>
      <ResourcesStack.Screen
        name="Resources"
        component={Resources}
        options={{
          headerTitle: () => <HeaderTitle title="Resources" />,
          headerLeft: () => <HeaderButton />,
        }}
      />
    </ResourcesStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: () => <HeaderTitle title="Search" />,
          headerLeft: () => <HeaderButton />,
        }}
      />
    </SearchStack.Navigator>
  );
}

function DiscussionsStackScreen() {
  return (
    <DiscussionsStack.Navigator>
      <DiscussionsStack.Screen
        name="Discussions"
        component={Discussions}
        options={{
          headerTitle: () => <HeaderTitle title="Discussions" />,
          headerLeft: () => <HeaderButton />,
        }}
      />
    </DiscussionsStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Latest') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Learning') {
            iconName = focused ? 'flame' : 'flame-outline';
          } else if (route.name === 'Resources') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Discussions') {
            iconName = focused ? 'apps' : 'apps-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Latest" component={LatestStackScreen} />
      <Tab.Screen name="Learning" component={LearningStackScreen} />
      <Tab.Screen name="Resources" component={ResourcesStackScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Discussions" component={DiscussionsStackScreen} />
    </Tab.Navigator>
  );
}
