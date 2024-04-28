import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageCard from './ImageCard';
import Header from './Header';
import { Button } from '@rneui/themed';
import GoBack from './GoBack';



export default function MarsGallery({ route }) {
  const { sol } = route.params
  const MarsDataUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${route.params.navTo.toLowerCase()}/photos?sol=${sol.trim()}&page=${Page}&api_key=yTyu3EzXD6EpGpSqOhvdn9z4bjfxgBAmL2kQfho1`
  const [MarsData, setMarsData] = useState()
  const [index, setindex] = useState(10)
  const [loaded, setloaded] = useState(false)
  const [Page, setPage] = useState(1)
  const GetMarsData = async () => {

    await fetch(MarsDataUrl)
      .then((res) => {
        return res.json()
      })
      .then((dat) => {
        setMarsData(dat)
        setloaded(true)
      })
      .catch((err) => {
        console.log(err.code);
      })
  }
  useEffect(() => {
    GetMarsData();
    () => { }
  }, [Page, index])
  return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}
      className={'flex-1 '}
    > 
      {/* <View style={{ width: '100%', height: '85%' }}>
        <Text style={{ color: 'gray', textAlign: 'center' }}>Showing Page <Text>{Page}</Text> of <Text>{6}</Text></Text>

        <View style={{ width: '100%', height: "100%", }}> */}

      {/* <ScrollView contentContainerStyle={{
            flexShrink: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: "space-evenly"
          }}


            style={{
              width: "100%", height: "100%",
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}> */}
      {
        // MarsData && MarsData.photos.length && loaded ? 
        // MarsData.photos.splice(0, index).map((dat) => {
        //   return <ImageCard key={dat.id} dat={dat} img={dat.img_src} />
        // }) : !loaded ? <Text style={{
        //   fontSize: 28,
        //   textAlign: 'center', marginTop: 20, margin: 'auto'
        // }}>Loading.....</Text> : loaded ? <Text>Nothing To See Here</Text> : ''
      }
      {
        // loaded ? <View style={{ width: "100%", display: 'flex', justifyContent: 'center',
        //  alignItems: 'center' }}>
        //   <Button title={"Show More"}
        //    onPress={() => { setindex(prev => prev + 10);
        //     setloaded(false) }} color={"black"} 
        //     buttonStyle={{ width: '30%' }} />
        // </View> : undefined
      }
      {/* </ScrollView> */}


      {/* 
        </View>

        <View style={{ width: '100%', position: 'absolute', paddingHorizontal: 10, bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button color={"black"} title={"Prev"} onPress={() => {
            setindex(6);
            Page > 1 ? setPage(prev => prev - 1) : setPage(1);
            setloaded(false)
          }} />
          <Button color={"black"} title={"Next"} onPress={() => {
            setindex(6);
            Page < 6 ? setPage(prev => prev + 1) : setPage(1);
            setloaded(false)
          }} />
        </View> */}
      {/* 
      </View> */}
<GoBack/>
      {

        loaded ?
          <FlatList
          showsVerticalScrollIndicator={false}
            data={MarsData.photos} 
            contentContainerStyle={{
              display:'flex',
              flexDirection:'row',
              flexWrap:"wrap",
              justifyContent:'space-evenly',
              alignItems:'center'
            }}
            renderItem={(item) => {
              return <ImageCard img={item.item.img_src} dat={item.item} key={item.index} />
            }}
          /> : <ActivityIndicator color={"black"} size={36} />
      }
   

<View style={{ width: '100%', position: 'absolute', paddingHorizontal: 10, bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <Button color={"black"} title={"Prev"} onPress={() => {
    setindex(6);
    Page > 1 ? setPage(prev => prev - 1) : setPage(1);
    setloaded(false)
  }} />
  <Button color={"black"} title={"Next"} onPress={() => {
    setindex(6);
    Page < 6 ? setPage(prev => prev + 1) : setPage(1);
    setloaded(false)
  }} />
</View>   
    </SafeAreaView>
  );
}
