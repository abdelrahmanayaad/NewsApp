import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import './global.css';
import HomeScreen from './src/screens/HomeScreen';
import {colors} from './src/utils/Schema';

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <HomeScreen />;
    </Fragment>
  );
};

export default App;
