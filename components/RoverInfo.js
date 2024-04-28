import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from './Header';
import { Octicons } from '@expo/vector-icons';
import { HandleDownload } from './DownLoadImage';
import GoBack from './GoBack';


export default function RoverInfo({ route }) {
   const { dat } = route.params 
   return (
      <View style={{
         width: '100%', display: 'flex',
         alignItems: 'center', height: "100%",

      }}>
         <GoBack />

         <View style={{ width: "100%", display: 'flex', justifyContent: "center", height: "40%" }}>

            <Image
               source={{ uri: dat.img_src }}
               resizeMode="contain"
               containerStyle={{ margin: 'auto' }}
               style={{ width: "100%", height: '100%' }}
            />

         </View>
         <View style={{
            width: '95%', padding: 10, display: 'flex',
            justifyContent: "space-evenly", alignItems: 'start',

            marginTop: 15, height: "35%", borderRadius: 10
         }}>
            <Text className={'text-2xl '}>CAMERA : <Text style={{ color: 'orangered' }}>{dat.camera.full_name}</Text></Text>
            <Text className={'text-2xl '}>EARTH_DATE : <Text style={{ color: 'orangered' }}>{dat.earth_date}</Text></Text>
            <Text className={'text-2xl '}>LAUNCH_DATE : <Text style={{ color: 'orangered' }}>{dat.rover.launch_date}</Text></Text>
            <Text className={'text-2xl '}>ROVER_NAME : <Text style={{ color: 'orangered' }}>{dat.rover.name}</Text></Text>
            <Text className={'text-2xl '}>STATUS : <Text style={{ color: 'green' }}>{dat.rover.status.toUpperCase()}</Text></Text>

         </View>

         <TouchableOpacity onPress={() => HandleDownload(dat.img_src)}
            style={{
               width: "95%",
               height: 50, bottom: 10, right: 10, position: 'absolute',
               display: 'flex', flexDirection: 'row', justifyContent: 'center',
               alignItems: 'center', borderRadius: 10, zIndex: 13
            }}>

            <Octicons name="download" size={24} color="black" />
            <Text style={{ color: 'black', fontSize: 18, marginLeft: 15 }}>Download_image</Text>
         </TouchableOpacity>

      </View>
   );
}
