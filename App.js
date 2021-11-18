import React from 'react';
import { StyleSheet } from 'react-native';
import HomeStack from './routes/homeStack';
export default function App() {
  return (
    <HomeStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
