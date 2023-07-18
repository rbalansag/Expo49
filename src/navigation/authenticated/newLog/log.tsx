import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import navigationStrings from "../../constants/navigationStrings"
import StartingDetailsScreen from "../../../screens/main/newLog/startDetails/startingDetailsScreen"
import StartingVehicleScreen from "../../../screens/main/newLog/startDetails/startingVehicleScreen"
import StartingCompanyScreen from "../../../screens/main/newLog/startDetails/startingCompanyScreen"
import LogScreen from "../../../screens/main/newLog/overview/overviewScreen"
import DetailScreen from "../../../screens/main/newLog/events/detailsScreen"
import ReviewListScreen from "../../../screens/main/newLog/reviewAndComplete/reviewListScreen"
import CompleteScreen from "../../../screens/main/newLog/reviewAndComplete/completeScreen"
import EditCompanyScreen from "../../../screens/main/account/editCompanyScreen"

export default function Index(props) {
   const Stack = createStackNavigator();
   
   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.STARTING_DETAILS}
               component={StartingDetailsScreen} 
               initialParams={props.route.params}
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.STARTING_VEHICLE}
               component={StartingVehicleScreen} 
               initialParams={props.route.params}
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.STARTING_COMPANY}
               component={StartingCompanyScreen} 
               initialParams={props.route.params}
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.OVERVIEW}
               initialParams={props.route.params}
               component={LogScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.EVENT_DETAILS}
               initialParams={props.route.params}
               component={DetailScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.REVIEW_LIST}
               initialParams={props.route.params}
               component={ReviewListScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.REVIEW_COMPANY_LIST}
               initialParams={props.route.params}
               component={CompleteScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.REVIEW_EDIT_COMPANY}
               initialParams={props.route.params}
               component={EditCompanyScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
