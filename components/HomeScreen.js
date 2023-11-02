import React, { useContext } from 'react';
import { View, Text } from 'react-native'; 
import Header from './Header';
import { AppContext } from '../App';
import APOD from './APOD';
import { SafeAreaView } from 'react-native-safe-area-context';
import MarsRovers from './MarsRovers';


export default function HomeScreen() {
    const dat  = useContext(AppContext)
  return (
    <SafeAreaView style={{width:'100%',height:'100%'}}>
      
    <View style={{
      width:'100%',
      height:'100%', 
      display:'flex',
      flexDirection:"column",
      justifyContent:"start",
      alignItems:'center',
      backgroundColor:'black',
  }}>
       <Header />
       <APOD/> 
      <MarsRovers />
 
     </View>
     
    </SafeAreaView>
  );
}
