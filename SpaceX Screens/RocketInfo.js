import { Button, Image } from '@rneui/themed';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Octicons } from '@expo/vector-icons';
import { HandleDownload } from '../components/DownLoadImage';

export default function RocketInfo({ route }) {
  const { dat } = route.params
  return (
    <View style={{ width: '100%', display: 'flex', height: "100%", backgroundColor: 'white' }}>
      <Header />
      <View style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>



        <ScrollView horizontal style={{ width: '100%', marginRight: 10, padding: 10 }}>
          {
            dat.flickr_images ? dat.flickr_images.map((img) => {
              return (<><Image
                source={{ uri: img }}
                resizeMode='cover'
                containerStyle={{ position: 'relative' }}
                style={{ width: 350, height: "100%", position: 'relative', marginHorizontal: 10, borderRadius: 10 }} />
                <Button color={"black"}
                  onPress={() => HandleDownload(img)}
                  style={{ position: 'absolute', left: 0 }}
                  buttonStyle={{ width: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, borderRadius: 10 }} icon={<Octicons name="download" color={'white'} size={24} style={{ position: 'absolute', bottom: 10, right: 20, zIndex: 10 }} />} />

              </>)
            }) : undefined

          }
        </ScrollView>

      </View>

      <Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 18 }}>{dat.name}</Text>
      <Text style={{ textAlign: 'center' }}>
        {dat.description}
      </Text>

      <View style={{
        width: "95%",
        borderRadius: 10,
        elevation: 1,
        padding: 10
      }}>
        <Text style={{ fontWeight: '900', fontSize: 18, textAlign: 'center' }}>Rocket Detail</Text>
        <Text>Mass : {dat.mass.kg}kg</Text>
        <Text>Cost_Per_Launch : ${dat.cost_per_launch}</Text>
        <Text>Company : {dat.company}</Text>
        <Text>PayLoad_Capacity : {dat.payload_weights[0].kg}Kg</Text>
        <Text>PayLoad_Orbit :{dat.payload_weights[0].name}</Text>
        <Text>Stages : {dat.stages}</Text>
      </View>

    </View>
  );
}
