import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings"
import BottomNav from "./bottomNav";
import Log from "./newLog/log";
import ViewEventScreen from "../../screens/main/history/viewEventScreen";
import ExportScreen from "../../screens/main/history/exportScreen";

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.MAIN_NAVIGATION}
               component={BottomNav} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.CREATE_LOG}
               component={Log} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.EXPORT}
               component={ExportScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
