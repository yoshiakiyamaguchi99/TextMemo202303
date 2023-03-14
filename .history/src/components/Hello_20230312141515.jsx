import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Hello() {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20;
 },
});

export default Hello;
