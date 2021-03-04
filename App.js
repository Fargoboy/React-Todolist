import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todolist from './Components/goals';

export default function App() {
  return (
    <View style={styles.container}>
 <div> <h3> Add New Goal set Below Text Box:</h3></div>
      <Todolist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#133337',
    color:'#fff',
    width: '700',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
