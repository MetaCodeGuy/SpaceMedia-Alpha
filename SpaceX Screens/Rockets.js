import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import RocketCard from './RocketCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import GoBack from '../components/GoBack';
import { StatusBar } from 'expo-status-bar';

const SpaceXUrl = "https://api.spacexdata.com/v4/rockets"

export default function Rockets() {
  const [RocketsData, setRocketsData] = useState()
  const GetRocketsData = () => {
    fetch(SpaceXUrl).then((res) => res.json())
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
    }}>
      <GoBack />
      <ScrollView style={{
        display: 'flex',
        width: '100%', 
        paddingVertical:10,
      }} 
        contentContainerStyle={{
          display: 'flex',
          flexWrap: 'wrap', 
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'row'
        }}>

        {
          RocketsData ? RocketsData.map((dat, index) => {
            return <RocketCard key={index} img={dat.flickr_images[0]} dat={dat} name={dat.name} />
          }) : undefined
        }

      </ScrollView>
      {/* <FlatList
className={"w-full flex "}
data={RocketsData}
renderItem={(item)=>{
  return <RocketCard key={item.index} 
  img={item.item.flickr_images[0]} dat={item.item} name={item.item.name} />
}}
/> */}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
