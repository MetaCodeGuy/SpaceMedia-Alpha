import { NavigationContainer } from '@react-navigation/native';
import { createContext, useEffect, useState } from 'react';
import APODBIG from './components/APODBIG';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rover from './components/Rover';
import MarsGallery from './components/MarsGallery';
import RoverInfo from './components/RoverInfo';
import MyBottomNav from './components/BottomTab'
import RocketInfo from './SpaceX Screens/RocketInfo';
import LaunchMedia from './SpaceX Screens/LaunchMedia';
import FeedPage from './components/FeedPage';
import Settings from './components/Settings';

const Apod_url ='https://api.nasa.gov/planetary/apod?api_key=yTyu3EzXD6EpGpSqOhvdn9z4bjfxgBAmL2kQfho1'
export const AppContext = createContext()
const Stack = createNativeStackNavigator()
export default function App() {

  const [ApodData, setapodData] = useState({ Name: 'nithish' })
  const GetApod = async () => {
    fetch(Apod_url).then((res) => res.json())
      .then((dat) => setapodData(dat))
  } 
 
  useEffect(() => {
    GetApod();
  }, [])

  return (
    <AppContext.Provider value={[ApodData]}  >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="root">
          <Stack.Screen name="root"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={MyBottomNav} />
          <Stack.Screen name="apod"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={APODBIG} />
          <Stack.Screen name="Rover"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={Rover} /> 
          <Stack.Screen name="RoverInfo"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={RoverInfo} />
          <Stack.Screen name="RocketInfo"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={RocketInfo} />

          <Stack.Screen name="LaunchMedia"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={LaunchMedia} />

          <Stack.Screen name="MarsGallery"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={MarsGallery} />
          <Stack.Screen name="FeedPage"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={FeedPage} />
          <Stack.Screen name="Settings"
            options={{ headerShown: false, statusBarColor: '#3A3A3A' }} component={Settings} />

        </Stack.Navigator> 

      </NavigationContainer>

    </AppContext.Provider>
  );
}

