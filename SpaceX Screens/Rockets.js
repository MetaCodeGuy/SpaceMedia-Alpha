import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  ScrollView } from 'react-native';
import RocketCard from './RocketCard';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import Header from '../components/Header';



export default function Rockets() {
  const [RocketsData, setRocketsData] = useState()
  const GetRocketsData = () => {
    fetch("https://api.spacexdata.com/v4/rockets").then((res) => res.json())
      .then((dat) => {
        setRocketsData(dat)
      })
  }

  useEffect(() => {
    GetRocketsData();
  }, [])

  return (
    <SafeAreaView style={{
      width: '100%',
      height: "100%",
      backgroundColor: "black"
    }}>
      <Header />
      <ScrollView style={{
        display: 'flex',
        width: '100%'
      }}
        contentContainerStyle={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          flexDirection: 'row'
        }}>

        {
          RocketsData ? RocketsData.map((dat) => {
            return <RocketCard img={dat.flickr_images[0]} dat={dat} name={dat.name} />
          }) : undefined
        }

      </ScrollView>


    </SafeAreaView>
  );
}
