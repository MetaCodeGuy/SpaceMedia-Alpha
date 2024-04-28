import React, { useContext } from 'react'; 
import { AppContext } from '../App';
import APOD from './APOD';
import { SafeAreaView } from 'react-native-safe-area-context';
import MarsRovers from './MarsRovers'; 
import Header from './Header';
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen() {
  const dat = useContext(AppContext)
  return (
    <SafeAreaView style={{
      width: '100%', height: '100%', display: 'flex',
      flexDirection: "column",
      justifyContent: "start",
      alignItems: 'center',
    }}>

    <Header/>

    <APOD />

{/* Rovers */}

<MarsRovers />
<StatusBar style='auto'/>
    </SafeAreaView>
  );
}
