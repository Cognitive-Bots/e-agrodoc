import React from 'react';
import { StyleSheet } from 'react-native';
import HomeStack from './routes/homeStack';
import NavContainer from './routes/drawer';
export default function App() {
  return (
    // <HomeStack />
    // <Navigator />
    <NavContainer />
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
