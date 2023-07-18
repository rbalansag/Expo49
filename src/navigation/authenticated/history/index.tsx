import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import navigationStrings from "../../constants/navigationStrings"
import LogHistoryScreen from "../../../screens/main/history/logHistoryScreen";
import LogScreen from "../../../screens/main/newLog/overview/overviewScreen"
import ReviewListScreen from "../../../screens/main/newLog/reviewAndComplete/reviewListScreen"

export default function Index(props) {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.HISTORY_LANDING}
               component={LogHistoryScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.HISTORY_TIMELINE_VIEW}
               component={LogScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.HISTORY_LIST_VIEW}
               component={ReviewListScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
