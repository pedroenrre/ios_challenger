import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Login from '~/pages/Login';
import Companies from '~/pages/Companies';

const Stack = createStackNavigator();



const Routes = () => {
  const {signed} = useSelector((state) => state.auth);

  return (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={signed ? 'Companies' : 'Login'}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Companies" component={Companies} />
  </Stack.Navigator>
)};

export default Routes;
