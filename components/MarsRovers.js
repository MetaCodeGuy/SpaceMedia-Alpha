import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AppContext } from '../App';
import RoverCard from './RoverCard';

export default function MarsRovers() {
  const data = useContext(AppContext)
  return (
    <View style={{
      width: '100%', height: "40%",
      maxHeight: 300,
      backgroundColor: 'black',
    }}>
      <Text style={{
        fontWeight: "900",
        fontSize: 16,
        color:'white',
        marginVertical: 5,
        marginLeft: 14
      }}>Mars</Text>
      <ScrollView bounces={false} bouncesZoom={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ padding: 10 }}
      >
        <RoverCard img={require("../assets/curiosity.jpg")} title={"Curiosity"} />
        <RoverCard img={require("../assets/oppurtunity.jpg")} title={"opportunity"} />
        <RoverCard img={require("../assets/spirit.jpg")} title={"Spirit"} />
      </ScrollView>
    </View>
  );
}
