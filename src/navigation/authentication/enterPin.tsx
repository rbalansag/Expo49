import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings"
import PinScreen from "../../screens/authentication/pin";
import ForgotPinScreen from "../../screens/authentication/pin/forgotPin";

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ENTER_PIN}
               component={PinScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.FORGOT_PIN}
               component={ForgotPinScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
