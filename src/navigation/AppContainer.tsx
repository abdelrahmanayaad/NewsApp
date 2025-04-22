import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {colors} from '../utils/Schema';
import MainStack from './MainStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <MainStack />
    </NavigationContainer>
  );
};

export default AppContainer;
