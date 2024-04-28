
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Launches from '../SpaceX Screens/Launches';
import Rockets from '../SpaceX Screens/Rockets';
import { Octicons } from '@expo/vector-icons';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import SearchPage from './SearchPage';

const Tab = createBottomTabNavigator();
export default function MyBottomNav() {
    return (
        <Tab.Navigator initialRouteName='Home'
            // screenOptions={{
            //     tabBarStyle: {
            //         position: 'absolute', width: '95%', borderRadius: 10, height: 60,
            //         justifyContent: 'center',
            //         alignItems: 'center',
            //         margin: 'auto',
            //         bottom: 20,
            //         display:'flex',

            //     },
           // }}
        >
            <Tab.Screen name="Home" options={{

                headerShown: false, tabBarIcon: ({ focused }) => {
                    return <AntDesign name="home" size={24} color={focused ? "black" : "gray"} />
                }, tabBarActiveTintColor: 'black'
            }}
                component={HomeScreen} />


            <Tab.Screen name="Search"
                options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <Octicons name="search" size={24} color={focused ? "black" : "gray"} />
                    },
                    tabBarActiveTintColor: 'black'
                }} component={SearchPage} />


            <Tab.Screen name="Rockets"
                options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <AntDesign name="rocket1" size={24} color={focused ? "black" : "gray"} />
                    },
                    tabBarActiveTintColor: 'black'
                }} component={Rockets} />




            <Tab.Screen name="Launches"
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons
                            name='planet-outline' size={26}
                            color={focused ? "black" : "gray"} />
                    }
                }}
                component={Launches} />
        </Tab.Navigator>

    )
};
