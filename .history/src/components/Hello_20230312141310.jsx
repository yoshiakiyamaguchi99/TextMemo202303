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
    bsckgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',


 },
});

export default Hello;
