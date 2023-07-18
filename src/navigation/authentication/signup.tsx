import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings"
import SignupScreen from "../../screens/authentication/signup";
import LicenseScreen from "../../screens/authentication/signup/driversLicense";
import SetPasswordScreen from "../../screens/authentication/signup/setPassword";
import SetPinScreen from "../../screens/authentication/signup/setPin";

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP_DETAILS}
               component={SignupScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP_LICENSE}
               component={LicenseScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP_PASSWORD}
               component={SetPasswordScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP_PIN}
               component={SetPinScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
