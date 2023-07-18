import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { register } from "react-native-bundle-splitter";
import useNetworkStatus from "../../onStart/useNetworkStatus";
import { Text, View, Toast } from "react-native-ui-lib";
import navigationStrings from "../constants/navigationStrings"
import HomeScreen from "../../screens/main/home";
import NewLogScreen from "./newLog";
import HistoryScreen from "./history";
import AccountScreen from "./account";

const Tab = createBottomTabNavigator(); 

const screenOptions = {
   headerShown: false,
   tabBarStyle: {zIndex: 901, elevation: 15, backgroundColor: '#F8FAFC', height: 50},
   tabBarShowLabel: false,
   tabBarHideOnKeyboard: true
}

export default function Index() {
   

   return (
      <>
         <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
               // options={icon_store}
               name={navigationStrings.HOME}     
               component={HomeScreen} 
            />
            <Tab.Screen 
               // options={icon_bulletin}
               name={navigationStrings.NEW_LOG}     
               component={NewLogScreen}  
            />
            <Tab.Screen 
               // options={icon_bulletin}
               name={navigationStrings.HISTORY}     
               component={HistoryScreen}  
            />
            <Tab.Screen 
               // options={icon_bulletin}
               name={navigationStrings.ACCOUNT}     
               component={AccountScreen}  
            />
         </Tab.Navigator> 
      </>
   );
}
