import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import LaunchCard from './LaunchCard';
import Header from '../components/Header';

export default function Launches() {
  const [LaunchData, setLaunchData] = useState()
  const [StartIndex, setStartIndex] = useState(0)
  const [EndIndex, setEndIndex] = useState(10)


  const GetLaunchData = () => {
    fetch("https://api.spacexdata.com/v5/launches").then((res) => res.json())
      .then((dat) => {
        setLaunchData(dat)
      })
  }

  useEffect(() => {
    GetLaunchData();
  }, [StartIndex])


  return (
    <View style={{ width: '100%', height: '100%'}}>
   
      <Text style={{ color: 'white', textAlign: 'center' }}>Showing Page {StartIndex / 10 + 1} of {Math.floor(LaunchData?.length / 10)}</Text>
      <ScrollView style={{
        flex: 1,
        flexWrap: "wrap",
        display: 'flex',
        width: '100%',
      }}
        contentContainerStyle={{
          alignItems: 'center',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: "space-evenly",
        }}
      >

        {
          LaunchData ? LaunchData.splice(StartIndex, EndIndex).map((dat) => {
            return <LaunchCard name={dat.name} key={dat.id} data={dat} img={dat.links.patch.small} />
          }) : undefined
        }

      </ScrollView>


      <View style={{ width: '100%', position: 'absolute', bottom: 10, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>


        <Button color={"black"} title='Prev' onPress={() => {
          if (StartIndex <= 0) setStartIndex(0)
          else setStartIndex(prev => prev - 10)
        }} />
        <Button color={"black"} title='Next' onPress={() => {
          if (StartIndex > 185) setStartIndex(0)
          else setStartIndex(prev => prev + 10)
        }} />
      </View>


    </View>
  );
}
