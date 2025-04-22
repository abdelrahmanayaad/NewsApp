import React from 'react';
import RootStackParamList from './types';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, NewsDetailsScreen} from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
