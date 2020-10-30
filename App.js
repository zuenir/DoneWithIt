import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
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

export default function App() {
  return (
    <ListingsScreen/>
  );
}