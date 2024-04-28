import React, { useContext } from 'react';
import { Octicons } from '@expo/vector-icons';
import { View, Text, Image, ScrollView, SafeAreaView, Alert, Platform, Pressable, Linking, TouchableOpacity } from 'react-native';
import { AppContext } from '../App';
import Header from './Header';
import { Button } from '@rneui/themed';
import { HandleDownload } from './DownLoadImage';
import { Ionicons } from '@expo/vector-icons/build/Icons';
import GoBack from './GoBack';
import { StatusBar } from 'expo-status-bar';

export default function APODBIG() {
    const data = useContext(AppContext)


    return (
        <SafeAreaView style={{
            width: '100%', height: '100%', display: 'flex',
            flexDirection: 'column',
            justifyContent: "space-evenly",
            alignItems: 'center'
        }}>
<GoBack />
            {data[0].media_type == "video" ?
                <TouchableOpacity
                    style={{
                        width: '100%',
                        height: '100%', maxHeight: 250
                    }}
                    onPress={() => {
                        Linking.openURL(data[0].url)
                    }}
                >
                    <Image 
                        source={require('../assets/adaptive-icon.png')}
                        resizeMode="contain"
                        style={{
                            width: '100%',
                            height: '100%', maxHeight: 250,
                            borderRadius: 10,
                        }}
                    /></TouchableOpacity> :
                <Image
                    source={{ uri: data[0].url }}
                    resizeMode="cover"
                    style={{
                        width: '95%',
                        height: '40%', maxHeight: 250,
                        borderRadius: 10,
                    }}
                />}
            <View style={{
                width: "95%",
                height: "50%",
                display: 'flex',
                borderRadius: 10,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>

                <ScrollView style={{
                    padding: 10,
                }} bounces={false}
                    bouncesZoom={false}>
                    <Text style={{
                        fontSize: 26,
                        fontWeight: 900
                    }}>{data[0].title}</Text>
                    <Text style={{  
                        marginBottom: 10, fontSize: 16
                    }}>Picture_By : <Text style={{}}>{data[0].copyright?.trim() || "No One!!!"}</Text></Text>
                    <Text style={{ 
                        textTransform: "capitalize",
                        marginBottom: 15,

                        marginTop: 10,
                        fontSize: 16
                    }}><Text style={{}}>{data[0].explanation}</Text></Text>
                    <Button
                        color={"black"}
                        title={"Download_image"}
                        buttonStyle={{
                            padding: 10,
                            marginBottom: 15
                        }}
                        onPress={() => HandleDownload(data[0].url)}
                        titleStyle={{ marginLeft: 10 }}
                        icon={<Octicons name="download" size={24}
                            color="white" />}
                    />

                </ScrollView>

            </View>
            <StatusBar style='auto'/>
        </SafeAreaView>
    )

}

