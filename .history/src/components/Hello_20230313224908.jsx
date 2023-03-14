import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Hello(props) {
  const { children } = props;
  return (
    <View>
      <Text style={styles.text}>
        Hello { children }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
 text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
 },
});

export default Hello;
