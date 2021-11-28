import React from 'react';
import { StyleSheet } from 'react-native';
import NavContainer from './routes/drawer';
export default function App() {
  return (
    <NavContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5236',
  },
});
