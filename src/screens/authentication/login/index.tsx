// library imports
import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Toast } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../../../navigation/constants/navigationStrings";
const Form = register<{ getFormParam }>({ loader: () => import("./components/form"), name: "FormComponent" });

export default function Index(props) {
   // get data from form
   const getFormParam = (form) => {
      console.log(form);
   };
   
   return (
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
         <Text style={{ fontSize: 50 }}>Login screen</Text>
         <Form getFormParam={getFormParam} />
         <TouchableOpacity onPress={() => props.navigation.push(navigationStrings.FORGOT_PASSWORD)}>
            <Text style={{ fontSize: 20, backgroundColor: "yellow", paddingVertical: 5, paddingHorizontal: 5 }}>
               Forgot password
            </Text>
         </TouchableOpacity>
      </View>
   );
}
