import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AppContext } from '../App';
import RoverCard from './RoverCard';
import { Ionicons } from '@expo/vector-icons';

export default function MarsRovers() {
  const data = useContext(AppContext)
  return (
    <View style={{
      width: '100%', height: "40%", marginTop:30,
    }}  >

      <View  
      className={'flex-wrap flex flex-row'}
        style={{ padding: 10 }}
      >
        <RoverCard img={require("../assets/curiosity.jpg")} title={"Curiosity"} />
        <RoverCard img={require("../assets/oppurtunity.jpg")} title={"opportunity"} />
        <RoverCard img={require("../assets/spirit.jpg")} title={"Spirit"} />
        <RoverCard icon={true} title={"Explore"} />
    
      </View>
    </View>
  );
}
