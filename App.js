import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './native-components/home';
import HomeAlternate from './native-components/homeAlternate';


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{title: "Welcome"}}
          />
          <Stack.Screen 
            name="HomeAlternate"
            component={HomeAlternate}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
