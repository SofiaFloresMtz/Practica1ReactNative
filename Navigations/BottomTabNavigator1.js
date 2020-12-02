import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideoScreen from '../Screens/VideoScreen';
import EmailsScreen from '../Screens/EmailsScreen';
import ContactScreen from '../Screens/ContactScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
import AnotherScreen from '../Navigations/TopTapNavigator1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Settings"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Video"
                component={VideoScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-play"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Email"
                component={EmailsScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-mail"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Contacto"
                component={ContactScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-contact"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Más"
                component={AnotherScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}