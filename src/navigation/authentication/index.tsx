import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";
import useNetworkStatus from "../../onStart/useNetworkStatus";
import { Text, View, Toast } from "react-native-ui-lib";
import navigationStrings from "../constants/navigationStrings"
import LandingScreen from "../../screens/authentication/landing";
import SignupScreen from './signup';
import LoginScreen from './login';
import EnterPinScreen from './enterPin';

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.AUTHENTICATION_LANDING}
               component={LandingScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP}
               component={SignupScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.LOGIN}
               component={LoginScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.PIN}
               component={EnterPinScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
