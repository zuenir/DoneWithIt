import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import AppCard from './App/components/AppCard/AppCard';
import AppText from './App/components/AppText';
import ListingDetailsScreen from './App/screens/ListingDetailsScreen';
import WelcomeScreen from './App/screens/WelcomeScreen';
import ViewImageScreen from './App/screens/ViewImageScreen';
import MessagesScreen from './App/screens/MessagesScreen';


export default function App() {
  return (
    <MessagesScreen/>
  );
}