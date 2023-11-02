 
import { useNavigation } from '@react-navigation/native'; 
import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Header() {
  const nav = useNavigation()
  return (
    <View style={{
      width: "100%",
      height: "10%",
      display: 'flex',
      maxHeight: 80,
      minHeight: 50,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row'
    }}>
      {/* <Image
        source={require('../assets/logo.png')}
        resizeMode='contain'
        style={{ height: 30, width: "60%", marginLeft: 14 }}
      />
  */}
  <Text style={{color:'white',fontSize:24,fontWeight:900,marginLeft:10}}>SPACEMEDIA</Text>
    </View>
  );
}
