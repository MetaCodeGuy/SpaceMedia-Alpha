import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GoBack = () => {
    const nav = useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>{
     if(nav.canGoBack){
        nav.goBack()
     }
    }}
    className={'h-14 w-14 shadow absolute z-10 left-2 top-2 shadow-black rounded-md flex justify-center items-center bg-white'}>
      <Ionicons name="chevron-back-outline" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default GoBack
 