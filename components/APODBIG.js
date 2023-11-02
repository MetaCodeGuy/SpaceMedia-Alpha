import React, { useContext } from 'react';
import { Octicons } from '@expo/vector-icons';
import { View, Text, Image, ScrollView, SafeAreaView, Alert, Platform } from 'react-native';
import { AppContext } from '../App';
import Header from './Header'; 
import { Button } from '@rneui/themed'; 

export default function APODBIG() {
    const data = useContext(AppContext)


    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>

            <View
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',


                    backgroundColor: "white",
                    justifyContent: "space-between",
                    alignItems: 'center'
                }}
            >
                <Header />
                <Image
                    source={{ uri: data[0].url }}
                    resizeMode="cover"
                    style={{
                        width: '95%',
                        height: '40%', maxHeight: 250, borderRadius: 10,
                        elevation: 1,
                    }}
                />
                <Text style={{}}>{data[0].title}</Text>
                <View style={{
                    width: "95%",
                    height: "40%",
                    display: 'flex',
                    borderRadius: 10,
                    maxHeight: 450,
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>

                    <Text style={{ fontWeight: "900", marginBottom: 10, fontSize: 16 }}>Picture_By : <Text style={{ color: '#3A3A3A' }}>{data[0].copyright?.trim() || "No One!!!"}</Text></Text>
                    <ScrollView style={{ padding: 10, elevation: 1 }} bounces={false} bouncesZoom={false}>

                        <Text style={{ fontWeight: "900", textTransform: "capitalize", marginBottom: 15, marginTop: 10, fontSize: 16 }}><Text style={{ color: '#3A3A3A' }}>{data[0].explanation}</Text></Text>
                        <Button
                    color={"#3A3A3A"}
                    title={"Download_image"}
                    buttonStyle={{ padding: 10, marginBottom: 15 }}
                    titleStyle={{ marginLeft: 10 }}
                    icon={<Octicons name="download" size={24} color="white" />}
                />

                    </ScrollView>

                </View>
               
            </View>

        </SafeAreaView>
    )

}

