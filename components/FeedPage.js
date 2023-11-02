import React from 'react';
import { useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { View, Text, ScrollView   } from 'react-native';
import { Video } from "expo-av" 
import { Button } from '@rneui/themed';
import Header from './Header';
import { HandleDownload } from './DownLoadImage';
export default function FeedPage({ route }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [Videos, SetVideos] = useState([])
    const [Posters, setposters] = useState([])
    const data = route.params

    const getFeed = () => {
        fetch(data.dat.href)
            .then((res) => res.json())
            .then((dat) => {
                dat.map((dat) => {
                    if (dat.split('.')[3] === "mp4") SetVideos(prev => ([...prev, dat]))
                    else if (dat.split('.')[3] === "jpg") setposters(prev => ([...prev, dat]))
                    else return
                })
            })
    }
    useEffect(() => {
        getFeed();
    }, [])

    return (
        <View style={{ width: '100%', backgroundColor: 'white', flexDirection: 'column', height: '100%', display: 'flex', alignItems: 'center' }}>
            <Header />

            <Video

                source={{ uri: Videos[Video.length - 1] }}
                useNativeControls
                onLoadStart={() => { }}
                posterSource={Posters[0]}
                resizeMode='contain'

                videoStyle={{ borderRadius: 10 }}
                style={{ width: "95%", borderRadius: 10, backgroundColor: "black", height: "40%" }}
            />

            <ScrollView style={{ padding: 10 }}>
                <Text style={{ padding: 10, fontWeight: '900', fontSize: 20 }}>{data.dat.data[0].title}</Text>
                <Text style={{ padding: 10, fontSize: 16 }}>{data.dat.data[0].description}</Text>

                <Button
                    title={"Download_Video"}
                    color={"#3A3A3A"}
                    buttonStyle={{ marginVertical: 10 ,marginBottom:20}}
                    onPress={() => {
                        HandleDownload(Videos[Videos.length - 1])
                    }}
                    icon={<Octicons name="download" color={'white'} style={{ margin: 5 }} size={24} />}
                />
            </ScrollView>


        </View>
    );
}
