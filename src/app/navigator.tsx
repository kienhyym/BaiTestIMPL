import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from '../screen/Home/Home';
import Stargazers from '../screen/Stargazers';

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Stargazers" component={Stargazers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
