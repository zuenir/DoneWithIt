import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './routes';
import MyListingsScreen from '../screens/MyListingsScreen';

const Stack = createStackNavigator();
 
const AccountNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.ACCOUNT} component={AccountScreen}/>
        <Stack.Screen name={routes.MYLISTINGS} component={MyListingsScreen}/>
        <Stack.Screen name={routes.MESSAGES} component={MessagesScreen}/>
    </Stack.Navigator>
);

export default AccountNavigator;