import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings"
import LoginScreen from "../../screens/authentication/login";
import ForgotPasswordScreen from "../../screens/authentication/login/forgotPassword";

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.LOGIN_FORM}
               component={LoginScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.FORGOT_PASSWORD}
               component={ForgotPasswordScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
