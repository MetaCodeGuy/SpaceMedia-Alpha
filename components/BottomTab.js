 
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
            <Tab.Screen name="Home"  options={{
       tabBarActiveBackgroundColor:"white",
       tabBarInactiveBackgroundColor:'black',
                headerShown: false, tabBarIcon: ({ focused }) => {
                    return <AntDesign name="home" size={24} color={focused ? "black" :"white"} />
                }, tabBarActiveTintColor: 'black'
            }}
                component={HomeScreen} />


            <Tab.Screen name="Search"
                options={{
                    tabBarActiveBackgroundColor:"white",
                    tabBarInactiveBackgroundColor:'black',
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <Octicons name="search" size={24} color={focused ? "black" :"white"} />
                    },
                    tabBarActiveTintColor: 'black'
                }} component={SearchPage} />


            <Tab.Screen name="Rockets"
                options={{
                    tabBarActiveBackgroundColor:"white",
                    tabBarInactiveBackgroundColor:'black',
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <AntDesign name="rocket1" size={24} color={focused ? "black" :"white"} />
                    },
                    tabBarActiveTintColor: 'black'
                }} component={Rockets} />




            <Tab.Screen name="Launches"
                options={{
                    tabBarActiveBackgroundColor:"white",
                    tabBarInactiveBackgroundColor:'black',
                    headerShown: false,
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons
                            name='planet-outline' size={26}
                            color={focused ? "black" :"white"} />
                    }
                }}
                component={Launches} />
        </Tab.Navigator>

    )
}
