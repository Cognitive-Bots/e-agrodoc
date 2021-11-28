import React from 'react';
import { StyleSheet } from 'react-native';
import HomeStack from './routes/homeStack';
import NavContainer from './routes/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <NavContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#FF5236',
  },
});
