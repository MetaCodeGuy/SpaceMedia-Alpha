import { Button } from '@rneui/themed';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Header from './Header'
import { useEffect } from 'react';
import { useState } from 'react';
import { View, TextInput, ScrollView, SafeAreaView, FlatList } from 'react-native';
import SearchFeedCard from './SearchFeedCard';
import { Skeleton } from '@rneui/base';
import GoBack from './GoBack';
import SearchHeader from './SearchHeader';


export default function SearchPage() {
    const [Query, setQuery] = useState('Red Planet')
    const [Index, setIndex] = useState(30)
    const [Update, setUpdate] = useState(false)
    const [Loaded, setLoaded] = useState(false)
    const [Feeds, SetFeeds] = useState()
    const URL = `https://images-api.nasa.gov/search?q=${Query.trim()}&media_type=video`

    const GetFeed = () => {
        fetch(URL).then((res) => res.json())
            .then((dat) => { SetFeeds(dat.collection.items.splice(0, Index)); setLoaded(true) })
    }

    useEffect(() => {
        GetFeed();
    }, [Update, Index])
    return (
        <SafeAreaView style={{
            width: '100%', height: '100%',
        }}
            className={'p-2 '}
        >


            {/* <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'row',
                    padding: 10, justifyContent: "space-evenly",
                    flexWrap: 'wrap'
                }}
                style={{ width: '100%', display: 'flex' }}
            >
                {
                    Feeds && Loaded ? Feeds.map((dat, index) => {
                        return <SearchFeedCard key={index} dat={dat} />
                    }) : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => {
                        return <Skeleton key={index} style={{ borderRadius: 10, margin: 1, marginVertical: 10 }} width={"95%"} height={250} />
                    })
                }
                {Loaded ? <Button color={"black"} buttonStyle={{ marginTop: 10 }} title={"show more"} onPress={() => { setIndex(prev => prev + 30) }} /> : undefined}
            </ScrollView> */}

            <FlatList
                ListHeaderComponent={() => {
                    return <SearchHeader setIndex={setIndex} setLoaded={setLoaded}
                        setUpdate={setUpdate}
                        Query={Query}
                        setQuery={setQuery}
                    />
                }}
                showsVerticalScrollIndicator={false}
                data={Feeds}
                renderItem={(item) => {
                    return <SearchFeedCard dat={item.item} />
                }}

            />

        </SafeAreaView>
    );
}
