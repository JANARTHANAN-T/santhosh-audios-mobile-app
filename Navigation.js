import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp/SignUp';
import Home from './src/screens/Home';
import MyAccount from './src/screens/MyAccount';
import WebEdit from './src/screens/WebEdit/WebEdit';
import NewPassword from './src/screens/NewPassword/NewPassword';
import ForgetPassword from './src/screens/ForgetPassword/ForgetPassword';
import OTPEnter from './src/screens/OTPEnter/OTPEnter';
import ChangePassword from './src/screens/ChangePassword/ChangePassword';
import AuthChangePassword from './src/screens/AuthChangePassword/AuthChangePassword';
import HomeEdit from './src/screens/HomeEdit/HomeEdit';
import AboutEdit from './src/screens/AboutEdit/AboutEdit';
import ServiceEdit from './src/screens/ServiceEdit/ServiceEdit';
import ContactEdit from './src/screens/ContactEdit/ContactEdit';
import CountEdit from './src/screens/CountEdit/CountEdit';

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
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
        <Stack.Screen name="OTPEnter" component={OTPEnter} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="AuthChangePassword" component={AuthChangePassword} />
        <Stack.Screen name="HomeEdit" component={HomeEdit} />
        <Stack.Screen name="AboutEdit" component={AboutEdit} />
        <Stack.Screen name="ServiceEdit" component={ServiceEdit} />
        <Stack.Screen name="ContactEdit" component={ContactEdit} />
        <Stack.Screen name="CountEdit" component={CountEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;