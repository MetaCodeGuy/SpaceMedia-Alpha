import { Button, Image } from '@rneui/themed';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Octicons } from '@expo/vector-icons';
import { HandleDownload } from '../components/DownLoadImage';

export default function RocketInfo({ route }) {
  const { dat } = route.params
  return (
    <View style={{ width: '100%', display: 'flex',
     height: "100%", backgroundColor: 'black' }}>
      <Header />
      <View style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>



        <ScrollView horizontal style={{ width: '100%', marginRight: 10, padding: 10 }}>
          {
            dat.flickr_images ? dat.flickr_images.map((img) => {
              return (<View>
              <Image
                source={{ uri: img }}
                resizeMode='cover'
                childrenContainerStyle={{position:'relative'}}
                containerStyle={{ position: 'relative' }}
                style={{ width: 350, height: "100%", position: 'relative', marginHorizontal: 10, borderRadius: 10 }} />
                <Button color={"black"}
                  onPress={() => HandleDownload(img)}
                  containerStyle={{position:'absolute',bottom:10,right:20}} 
                  buttonStyle={{ width: 50, display: 'flex', 
                   justifyContent: 'center', 
                   alignItems: 'center', height: 50, borderRadius: 10 }} icon={<Octicons name="download" color={'white'} size={24} style={{ position: 'absolute', bottom: 10, right: 20, zIndex: 10 }} />} />

              </View>)
            }) : undefined

          }
        </ScrollView>

      </View>

      

      <ScrollView style={{
        width: "100%",
        borderWidth:1,
        borderColor:'white',
        marginVertical:15,
        borderRadius: 10, 
        padding: 10
      }}
      contentContainerStyle={{padding:10,margin:'auto'}}>
        <Text style={{ textAlign: 'center', 
      fontWeight: '600',
      color:'white',
       fontSize: 18 }}>{dat.name}</Text>
      <Text style={{ textAlign: 'center' ,color:'white'}}>
        {dat.description}
      </Text>
        <Text style={{ fontWeight: 900,color:'white' ,fontSize: 26, textAlign: 'center' }}>Rocket Detail</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:600}}>Mass : {dat.mass.kg}kg</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:600}}>Cost_Per_Launch : ${dat.cost_per_launch}</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:600}}>Company : {dat.company}</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:600}}>PayLoad_Capacity : {dat.payload_weights[0].kg}Kg</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:600}}>PayLoad_Orbit :{dat.payload_weights[0].name}</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:600}}>Stages : {dat.stages}</Text>
      </ScrollView>

    </View>
  );
}
