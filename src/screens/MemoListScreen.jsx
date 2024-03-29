import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreeen() {
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
