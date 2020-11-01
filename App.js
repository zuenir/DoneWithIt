import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Switch } from 'react-native';
import AppCard from './App/components/AppCard/AppCard';
import AppText from './App/components/AppText';
import ListingDetailsScreen from './App/screens/ListingDetailsScreen';
import WelcomeScreen from './App/screens/WelcomeScreen';
import ViewImageScreen from './App/screens/ViewImageScreen';
import MessagesScreen from './App/screens/MessagesScreen';
import Screen from './App/components/Screen';
import AppIcon from './App/components/AppIcon';
import colors from './App/config/colors';
import ListItem from './App/components/AppList/ListItem';
import AccountScreen from './App/screens/AccountScreen';
import ListingsScreen from './App/screens/ListingsScreen';
import AppTextInput from './App/components/AppText/AppTextInput';
import AppPicker from './App/components/AppPicker/AppPicker';
import LoginScreen from './App/screens/LoginScreen';
import RegisterScreen from './App/screens/RegisterScreen';


export default function App() {
  return (
    <RegisterScreen/>
  );
}