import React, { useRef } from 'react';
import { useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import { Video } from "expo-av"
import { Button } from '@rneui/themed';
import Header from './Header';
import { HandleDownload } from './DownLoadImage';
import GoBack from './GoBack';
import { StatusBar } from 'expo-status-bar';
export default function  FeedPage({ route }) { 
    console.log('rendering');
    const [Videos, SetVideos] = useState([])
   // const [ResizeMOde, setResizeMOde] = useState('cover') 
    const [Posters, setposters] = useState([])
    const data = route.params 
    const getFeed = () => {
        // fetch(data.dat.href)
            // .then((res) => res.json())
            // .then((dat) => {
                // dat.map((dat) => {
                //     if (dat.split('.')[3] === "mp4"){
                //          SetVideos(prev => ([...prev, dat]))
                //         }
                //     else if (dat.split('.')[3] === "jpg"){ setposters(prev => ([...prev, dat]))}
                //     else return
                // })
               // console.log(dat[0]);
            // })
            fetch(data.dat.href).then((res)=>res.json()).then((dat)=>{
               dat.map((link)=>{
                if(link.split('.').includes('mp4')){
                    SetVideos(link);  
                }else if(link.split('.').includes('jpg')){
                    setposters(link)
                }
               })
            })
    }


    useEffect(() => {
        getFeed();
    }, []) 
    console.log("renderiing",new Date().getMinutes());
    return (
        <SafeAreaView style={{
            width: '100%',
            flexDirection: 'column', height: '100%',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            padding: 10
        }}>
               <StatusBar style='auto' />
            <GoBack />
            <ScrollView style={{ flex: 1 }}
                contentContainerStyle={{ height: '100%', justifyContent: 'center', }}
            > 

                <Video 
                    source={{ uri: Videos }}
                    useNativeControls
                    posterSource={Posters}
                    resizeMode={'contain'}
                    // onFullscreen={() => {
                    //     setResizeMOde('contain')
                    // }} 
                    videoStyle={{
                        borderRadius: 10,
                        borderColor: 'white',
                        height: "100%"
                    }}
                    style={{
                        width: "100%", borderRadius: 10,
                        height: "30%",
                        backgroundColor:'black'
                    }}
                />

                <Text style={{ padding: 10, fontWeight: '900', fontSize: 20 }}>{data.dat.data[0].title}</Text>
                <Text style={{
                    padding: 10, fontSize: 16,

                }}>{data?.dat.data[0].description}</Text>

                <Button
                    title={"Download_Video"}
                    color={"#3A3A3A"}
                    buttonStyle={{ marginVertical: 10, marginBottom: 20 }}
                    onPress={() => {
                        HandleDownload(Videos)
                    }}
                    icon={<Octicons name="download" color={'white'} style={{ margin: 5 }} size={24} />}
                />
            </ScrollView> 
            
         
        </SafeAreaView>
    );
}
