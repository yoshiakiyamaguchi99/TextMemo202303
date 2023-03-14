import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

function Hello() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = Stylesheet.create({
 text: {
    color:'#fff',
 },
})

export default Hello;
