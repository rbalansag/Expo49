import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import navigationStrings from "../../constants/navigationStrings"
import AccountScreen from "../../../screens/main/account";
import ChangePaswordScreen from "../../../screens/main/account/changePasswordScreen";
import EditCompanyScreen from "../../../screens/main/account/editCompanyScreen";
import LicenseScreen from "../../../screens/main/account/licenseScreen";

export default function Index(props) {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ACCOUNT_LANDING}
               component={AccountScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ACCOUNT_CHANGE_PASSWORD}
               component={ChangePaswordScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ACCOUNT_EDIT_COMPANY}
               component={EditCompanyScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ACCOUNT_EDIT_LICENSE}
               component={LicenseScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
