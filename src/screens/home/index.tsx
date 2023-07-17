// library imports
import React from "react";
import { preload } from "react-native-bundle-splitter";
import { View, Text, Button, Typography } from "react-native-ui-lib";

// component imports
import navigationStrings from "../../navigation/constants/navigationStrings";

export default function Index(props: any) {
   return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Text>Home</Text>
         <Button
            backgroundColor="#0000F0"
            label="Open drawer"
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
}
