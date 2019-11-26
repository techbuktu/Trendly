/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { appStyles } from './styles/app'
import AppNavContainer  from './navigators'
import TopTabNav from './navigators/topTabNav'

import Home from './components/Home'

const App: () => React$Node = () => {
  return (
      <React.Fragment>
          <AppNavContainer />
      </React.Fragment>
    
  );
};


export default App;
