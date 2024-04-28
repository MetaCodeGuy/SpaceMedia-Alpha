import React from 'react';
import { View, Text } from 'react-native';
import GoBack from './GoBack';

export default function Settings() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <GoBack/>
      <Text>I am Settings</Text>
    </View>
  );
}
