import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../Screens/Home";
import Information from "../Screens/Information";
import Emergencia from "../Screens/Emergencia";
import Ligacoes from "../Screens/Ligacoes";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    labeled={false} 
    initialRouteName="Home"
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused
                    ? 'home'
                    : 'home-outline';
            } else if (route.name === 'Information') {
                iconName = focused ? 'information' : 'information-outline';
            } else if (route.name === 'Emergencia') {
                iconName = focused ? 'ambulance' : 'ambulance';
            }else if (route.name === 'Ligacoes') {
              iconName = focused ? 'phone-alert' : 'phone-alert-outline';
          }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Ligacoes" component={Ligacoes} />
      <Tab.Screen name="Emergencia"component={Emergencia} />
      <Tab.Screen name="Information" component={Information} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
export default MyTabs;