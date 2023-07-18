import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import navigationStrings from "../../constants/navigationStrings"
import LogForToday from "./logForToday";
import NewLogScreen from "../../../screens/main/newLog";

export default function Index(props) {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.NEW_LOG_LANDING}
               component={NewLogScreen} 
            />
            {/*
               <Stack.Screen 
                  options={{ ...TransitionPresets.SlideFromRightIOS }}
                  name={navigationStrings.CREATE_LOG_FOR_TODAY}
                  component={LogForToday} 
               />
            */}
         </Stack.Navigator>
      </>
   );
}
