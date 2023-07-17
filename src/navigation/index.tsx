import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";
import useNetworkStatus from "../onStart/useNetworkStatus";
import { Text, View, Toast } from "react-native-ui-lib";

const StackNavigation = register<any>({ loader: () => import("./stack") });

export default function index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator initialRouteName="Root">
            <Stack.Screen name="Home" options={{ headerShown: false }}>
               {(props) => <StackNavigation {...props} />}
            </Stack.Screen>
         </Stack.Navigator>
      </>
   );
}
