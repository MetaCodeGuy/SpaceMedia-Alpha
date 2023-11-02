 
import HomeScreen from './HomeScreen'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Launches from '../SpaceX Screens/Launches';
import Rockets from '../SpaceX Screens/Rockets';
import { Octicons } from '@expo/vector-icons';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import SearchPage from './SearchPage';

const Tab = createBottomTabNavigator();
export default MyBottomNav = () => {

    return (
        <Tab.Navigator initialRouteName='Home' >
            <Tab.Screen name="Home" options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    return <AntDesign name="home" size={24} color={focused ? "#00C2DC" : "black"} />
                }, tabBarActiveTintColor: '#00C2DC'
            }}
                component={HomeScreen} />


            <Tab.Screen name="Search"
                options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <Octicons name="search" size={24} color={focused ? "#00C2DC" : "black"} />
                    },
                    tabBarActiveTintColor: '#00C2DC'
                }} component={SearchPage} />


            <Tab.Screen name="Rockets"
                options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <AntDesign name="rocket1" size={24} color={focused ? "#00C2DC" : "black"} />
                    },
                    tabBarActiveTintColor: '#00C2DC'
                }} component={Rockets} />




            <Tab.Screen name="Launches"
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#00C2DC',
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons
                            name='planet-outline' size={26}
                            color={focused ? "#00C2DC" : "black"} />
                    }
                }}
                component={Launches} />
        </Tab.Navigator>

    )
}
