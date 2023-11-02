import { Button  } from '@rneui/themed';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Header from './Header'
import { useEffect } from 'react';
import { useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import SearchFeedCard from './SearchFeedCard'; 
import { Skeleton } from '@rneui/base';


export default function SearchPage() {
    const [Query, setQuery] = useState('Red Planet')
    const [Index, setIndex] = useState(30)
    const [Update, setUpdate] = useState(false)
    const [Loaded, setLoaded] = useState(false)
    const [Feeds, SetFeeds] = useState()
    const URL = `https://images-api.nasa.gov/search?q=${Query}&media_type=video`

    const GetFeed = () => {
        fetch(URL).then((res) => res.json())
            .then((dat) => { SetFeeds(dat.collection.items.splice(0, Index)); setLoaded(true) })
    }

    useEffect(() => {
        GetFeed();
    }, [Update, Index])
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <Header />

            <View style={{ width: '100%', marginBottom: 6, display: 'flex', maxHeight: 50, minHeight: 50, flexDirection: 'row', justifyContent: 'center', alingItems: 'center', height: '10%' }}>
                <TextInput
                    inputMode="text"
                    onChangeText={(txt) => setQuery(txt)}
                    value={Query}
                    style={{ width: '80%', borderRadius: 5, padding: 10, backgroundColor: '#c2c2c2' }}
                    placeholder='What Do You Want To Know?' />
                <Button color={'black'} onPress={
                    () => {
                        setUpdate(prev => !prev);
                        setIndex(30);
                        setLoaded(false)
                    }}
                    buttonStyle={{ height: '100%', marginLeft: 5, width: 50, borderRadius: 5 }}
                    style={{ width: '20%' }}
                    icon={<FontAwesome name="search" size={24} color="white" />} />
            </View>

            <ScrollView
                contentContainerStyle={{ flexDirection: 'row', padding: 10, justifyContent: "space-evenly", flexWrap: 'wrap' }}
                style={{ width: '100%', display: 'flex' }}
            >
                {
                    Feeds && Loaded ? Feeds.map((dat,index) => {
                        return <SearchFeedCard key={index} dat={dat} />
                    }) : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                        return <Skeleton style={{ borderRadius: 10, margin: 10 ,maxWidth:200}} width={"40%"}  height={150} />
                    })
                }
                {Loaded ? <Button color={"black"} buttonStyle={{marginTop:10}} title={"show more"} onPress={() => { setIndex(prev => prev + 30) }} /> : undefined}
            </ScrollView>

        </View>
    );
}
