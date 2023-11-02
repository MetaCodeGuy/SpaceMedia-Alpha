import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed'; 
import { View, Text } from 'react-native';

export default function RocketCard({ img, name, dat }) {
  const nav = useNavigation()
  return (
    <View onTouchEnd={() => { nav.navigate("RocketInfo", { dat }) }}
      style={{
        width: "90%", height: "40%",
        borderRadius: 10, margin: 10, maxHeight: 250, maxWidth: 500
      }}>
      <Image
        source={{ uri: img }}
        resizeMode='cover'
        style={{ width: '100%', height: '95%', borderRadius: 10 }}
      />
      <Text style={{ textAlign: 'center', fontWeight: '900',color:'white' }}>{name}</Text>
    </View>
  );
}
