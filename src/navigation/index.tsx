import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";
import useNetworkStatus from "../onStart/useNetworkStatus";
import { Text, View, Toast } from "react-native-ui-lib";
import navigationStrings from "./constants/navigationStrings"
import Authentication from './authentication';
import Authenticated from './authenticated';

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.AUTHENTICATION}
               component={Authentication} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.AUTHENTICATED}
               component={Authenticated} 
            />
         </Stack.Navigator>
      </>
   );
}
