import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import { Octicons } from '@expo/vector-icons';
import { HandleDownload } from './DownLoadImage';
import { Image } from '@rneui/themed';

export default function RoverInfo({ route }) {
   const { dat } = route.params
   return (
      <View style={{ width: '100%', display: 'flex', alignItems: 'center', height: "100%", backgroundColor: 'white' }}>
         <Header />
         <View style={{ width: "100%", display: 'flex', justifyContent: "center", height: "40%" }}>

            <Image
               source={{ uri: dat.img_src }}
               resizeMode="contain"
               containerStyle={{margin:'auto'}}
               style={{ width:"100%",height: '100%'}}
            />

         </View>
         <View style={{ width: '95%', padding: 10, display: 'flex',
          justifyContent: "space-evenly", alignItems: 'start',
          backgroundColor:'white', elevation: 5, 
          marginTop: 15, height: "35%", borderRadius: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>CAMERA : <Text style={{ color: '#00C2DC' }}>{dat.camera.full_name}</Text></Text>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>EARTH_DATE : <Text style={{ color: '#00C2DC' }}>{dat.earth_date}</Text></Text>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>LAUNCH_DATE : <Text style={{ color: '#00C2DC' }}>{dat.rover.launch_date}</Text></Text>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>ROVER_NAME : <Text style={{ color: '#00C2DC' }}>{dat.rover.name}</Text></Text>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>STATUS : <Text style={{ color: 'green' }}>{dat.rover.status.toUpperCase()}</Text></Text>

         </View>

         <TouchableOpacity onPress={() => HandleDownload(dat.img_src)}
            style={{
               width: "95%",
               height: 50, bottom: 10, right: 10,
               backgroundColor: 'black', position: 'absolute',
               display: 'flex', flexDirection: 'row', justifyContent: 'center',
               alignItems: 'center', borderRadius: 10, zIndex: 13
            }}>

            <Octicons name="download" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 15 }}>Download_image</Text>
         </TouchableOpacity>

      </View>
   );
}
