import React, { useState } from 'react';
import { View, Text, Image, TextInput, SafeAreaView } from 'react-native';
import Header from './Header';
import CButton from './Button';
import GoBack from './GoBack';

export default function Rover({ route }) {
  const { img, title } = route.params
  const [Sol, setSol] = useState('0')
  return (
    <SafeAreaView style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: "100%"
    }}>
      <GoBack />
      <View style={{
        width: "100%", display: 'flex', padding: 10,
        alignItems: 'center', maxHeight: 300, height: "40%"
      }}>
        <Image
          source={img}
          resizeMode='cover'
          style={{ width: '95%', height: "100%", borderRadius: 15 }}
        />
        <Text style={{
          marginTop: 5,

          fontSize: 24
        }}>{title}</Text>
      </View>


      <View style={{
        width: '100%',
        height: "35%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
      }}>


        <TextInput keyboardType='number-pad'
          placeholder='1000'
          inputMode="numeric"
          autoFocus
          style={{
            padding: 10,
            fontSize: 26,
            paddingHorizontal: 10,
            textAlign: 'center',
            borderRadius: 30,
            width: 80, borderColor: 'gray',
            borderWidth: 1
          }}
          value={Sol}
          onChangeText={(txt) => setSol(txt)}
          maxLength={4}
        />
        <Text style={{ fontSize: 24, }}>
          Which Sol You Want to See?
        </Text>
      </View>


      <CButton title={"Search"} navTo={title} sol={Sol} />
    </SafeAreaView>
  );
}
