import { Skeleton } from '@rneui/themed';
import React from 'react';
import { View, Text } from 'react-native';

export default function FeedLoader() {
  return (
    <View style={{width:"90%",height:150}}>
      <Skeleton height={"100%"} width={"100%"}/>
     </View>
  );
}
