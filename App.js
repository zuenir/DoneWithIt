import { StatusBar } from 'expo-status-bar';
import React , {useState, useEffect} from 'react';
import Screen from './App/components/Screen';
import ListingEditScreen from './App/screens/ListingEditScreen';

export default function App() {

  return (
    <Screen>
      <ListingEditScreen/>
    </Screen>
  );
}