import {  StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from './Header';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '@rneui/themed';

const SearchHeader = ({setQuery,Query,setUpdate,setIndex,setLoaded}) => {
  return (
    <>
<Header />
     <View style={{
                width: '100%',
                marginBottom: 6, display: 'flex',
                maxHeight: 50, minHeight: 50,
                flexDirection: 'row', justifyContent: 'center',
                alingItems: 'center', height: '10%', 
            }}>
                <TextInput
                    inputMode="text"
                    onChangeText={(txt) => setQuery(txt)}
                    value={Query}
                    style={{
                        width: '85%', borderRadius: 5,  
                        backgroundColor: '#c2c2c2',
                        fontSize:18,
                    }}
                    className={'px-4 py-2 '}
                    placeholder='What Do You Want To Know?' />
                <Button color={'black'} 
                title=''
                onPress={
                    () => {
                        // setUpdate(prev => !prev);
                        setIndex(30);
                        setLoaded(false)
                    }}
                    buttonStyle={{ height: '100%', marginLeft: 5, width: 50,
                     borderRadius: 5 }}
                    style={{ width: '20%' }}
                    icon={<FontAwesome name="search" size={24} color="white" />} />
            </View>
            
    </>
  )
}

export default SearchHeader

const styles = StyleSheet.create({})