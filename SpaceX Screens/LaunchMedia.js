 
import YoutubePlayer from "react-native-youtube-iframe";
import React from 'react';
import { View, Text, Alert, Button, StyleSheet } from 'react-native';
 
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';

export default function LaunchMedia({ route }) {

    const { data } = route.params
    const [PayloadData, setPayLoadData] = useState()

    const GetPayLoad = () => {
        fetch(`https://api.spacexdata.com/v4/payloads/${data.payloads[0]}`).then((res) => res.json())
            .then((dat) => setPayLoadData(dat))
    }

    useEffect(() => {
        GetPayLoad();
    }, [])

    return (
        <View style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
            alignItems: 'center'
        }}>
            <Header />
            <YoutubePlayer
                height={"30%"}
                width={'90%'}
                
                webViewStyle={{ borderRadius: 10 }}
                videoId={data.links.youtube_id}
            /> 
            <ScrollView style={{ width: '100%',backgroundColor:'black' }}

             centerContent={true} contentContainerStyle={{display:'flex',justifyContent:'center',alignItems:'center'}}>

                <Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 18 }}>{data.name}</Text>
                <Text style={{ color: 'white', paddingHorizontal:8, fontSize: 16, fontWeight: '700' }}>
                    {data.details || "No Failures!"}
                </Text>
                <View style={{
                    width: '90%',
                    height: 500,
                    marginVertical: 10,
                    backgroundColor:'black',
                    borderWidth:1,
                    borderColor:'white',
                    display: 'flex',margin:'auto',
                    justifyContent: 'space-evenly',
                    borderRadius: 10,
                    elevation: 5,
                    padding: 10,
                }}>

                    <Text style={{ color: "red", fontSize: 18, fontWeight: '900', textAlign: 'center' }}>PAYLOAD INFORMATION</Text>
                    <Text style={styles.payloadInfo}>Name : <Text style={styles.payloadTitle}>{PayloadData?.name}</Text></Text>
                    <Text style={styles.payloadInfo}>Type : <Text style={styles.payloadTitle}>{PayloadData?.type}</Text></Text>
                    <Text style={styles.payloadInfo}>PayLoad_Mass : <Text style={styles.payloadTitle}>{PayloadData?.mass_kg}Kg</Text></Text>
                    <Text style={styles.payloadInfo}>Orbit : {PayloadData?.orbit}</Text>
                    <Text style={styles.payloadInfo}>Customers : {PayloadData?.customers}</Text>
                    <Text style={styles.payloadInfo}>Manufacturers : {PayloadData?.manufacturers}</Text>

                    <Text style={{ color: "white", fontSize: 18, fontWeight: '900', textAlign: 'center' }}>Rocket </Text>
                    <Text style={{ color: "white", textAlign: 'center' }}>Click To View Rocket Info..</Text>

                </View>


            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    payloadInfo: {
        fontWeight: '900',
        color:'white',
        fontSize: 18,
    },
    payloadTitle: {
        color: 'green'
    }
})