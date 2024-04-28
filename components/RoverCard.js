import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function RoverCard({ img, title, icon }) {
  const nav = useNavigation() 
  return (
    <TouchableOpacity
      style={[{
        width: "45%",
        borderRadius: 10
      },
      icon ? {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      } : null
      ]}
      className={'h-[200]  m-2 '}
      onPress={() => { 
        if (!icon) {
          nav.navigate("Rover", { img, title });
        } else {
          nav.navigate('Search');
        }
      }}>

      <View style={{ borderRadius: 10, }} className={" "}>
        {!icon ? <Image
          source={img}
          resizeMode='cover'
          style={{ width: '100%', height: "100%", borderRadius: 10 }}
        /> : <Ionicons name='compass-outline' className={"self-center"} size={86} color={'white'} />
        }
      </View>
      {/* <Text style={[{ textAlign: 'center' }, icon ? { color: 'white' } : null]}>{title}</Text> */}

    </TouchableOpacity>
  );
}
