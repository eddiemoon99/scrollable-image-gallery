import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Gallery } from './components/gallery';

// data URL constant
const PHOTO_DATA_URL = 'https://jsonplaceholder.typicode.com/photos';

// Main React Component
export default function App() {
  return (
      <View>
        <Gallery url={PHOTO_DATA_URL}/>
        <StatusBar style="auto" />
      </View>
  );
}