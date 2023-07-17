import { View, Text, Button, Typography } from "react-native-ui-lib";
import React from "react";
import navigationStrings from "../../../navigation/constants/navigationStrings";
import { preload } from "react-native-bundle-splitter";
import { DrawerActions } from "@react-navigation/native";

const Index = (props): JSX.Element => {
   return (
      <View padding-s5>
         <Text style={{ ...Typography.text20 }}>Navigation samples</Text>
         <Button
            backgroundColor="#0000F0"
            label="Open drawer"
            labelStyle={{ fontWeight: "600" }}
            marginT-30
            enableShadow
            onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
         />
         <Button
            backgroundColor="#0000F0"
            label="Toggle drawer"
            labelStyle={{ fontWeight: "600" }}
            marginT-30
            enableShadow
            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
         />
         <Button
            backgroundColor="#0000F0"
            label="To home"
            labelStyle={{ fontWeight: "600" }}
            marginT-30
            enableShadow
            onPress={async () => {
               await Promise.all([preload().component("Home")]);
               props.navigation.navigate(navigationStrings.HOME);
            }}
         />
      </View>
   );
};

export default Index;
