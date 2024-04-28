import { Button, Image } from '@rneui/themed';
import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import { Octicons } from '@expo/vector-icons';
import { HandleDownload } from '../components/DownLoadImage';
import GoBack from '../components/GoBack';

export default function RocketInfo({ route }) {
  const { dat } = route.params
  return (
    <SafeAreaView style={{
      width: '100%', display: 'flex',
      height: "100%",
      justifyContent: 'center'
    }}>
      <GoBack />
      <View style={{
        width: '100%', height: '40%', display: 'flex',marginTop:"15%",
        justifyContent: 'center', alignContent: 'center', alignItems: 'center'
      }}>   
        <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}
        style={{ width: '100%', marginRight: 10, 
        padding: 10 }}>
          {
            dat.flickr_images ? dat.flickr_images.map((img) => {
              return (<View>
                <Image
                  source={{ uri: img }}
                  resizeMode='cover'
                  childrenContainerStyle={{ position: 'relative' }}
                  containerStyle={{ position: 'relative' }}
                  style={{ width: 350, height: "100%", position: 'relative',
                   marginHorizontal: 10, borderRadius: 10 }} />
                <Button color={"black"}
                  onPress={() => HandleDownload(img)}
                  containerStyle={{ position: 'absolute', bottom: 10, right: 20 }}
                  buttonStyle={{
                    width: 50, display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', height: 50, borderRadius: 10
                  }} icon={<Octicons name="download" color={'white'} size={24} style={{ position: 'absolute', bottom: 10, right: 20, zIndex: 10 }} />} />

              </View>)
            }) : undefined

          }
        </ScrollView>

      </View>



      <ScrollView style={{
        width: "100%", 
        marginVertical: 15,
        borderRadius: 10,
        padding: 10
      }}
       >
        <Text style={{
          textAlign: 'center',
          fontSize: 18
        }}>{dat.name}</Text>
        <Text style={{ textAlign: 'center' }}>
          {dat.description}
        </Text>
        <Text style={{ fontWeight:700,fontSize: 26, textAlign: 'center' ,marginVertical:20}}>Rocket Detail</Text>
        <Text className={"text-2xl "}>Mass : {dat.mass.kg}kg</Text>
        <Text className={"text-2xl "}>Cost_Per_Launch : ${dat.cost_per_launch}</Text>
        <Text className={"text-2xl "}>Company : {dat.company}</Text>
        <Text className={"text-2xl "}>PayLoad_Capacity : {dat.payload_weights[0].kg}Kg</Text>
        <Text className={"text-2xl "}>PayLoad_Orbit :{dat.payload_weights[0].name}</Text>
        <Text className={"text-2xl "}>Stages : {dat.stages}</Text>
      </ScrollView>

    </SafeAreaView>
  );
}
