import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'App'}>
        <Stack.Screen name="App" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
