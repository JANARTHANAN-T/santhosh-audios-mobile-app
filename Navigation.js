import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp/SignUp';
import Home from './src/screens/Home';
import MyAccount from './src/screens/MyAccount';
import WebEdit from './src/screens/WebEdit/WebEdit';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogIn' screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="WebEdit" component={WebEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;