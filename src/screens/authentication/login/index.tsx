// library imports
import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Button } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import { register } from "react-native-bundle-splitter";
import { useAuth0, Auth0Provider } from "react-native-auth0";
// component imports
import navigationStrings from "../../../navigation/constants/navigationStrings";
const Form = register<{ getFormParam }>({ loader: () => import("./components/form"), name: "FormComponent" });

export default function Index(props) {
   // get data from form
   const getFormParam = (form) => {
      console.log(form);
   };

   const { authorization } = useAuth0();

   const LoginButton = () => {
      const { authorize } = useAuth0();

      const onPress = async () => {
         try {
            await authorize({ scope: "openid profile email" })
               .then((e) => console.log(e))
               .catch((er) => console.log(er, 121212));
         } catch (e) {
            console.log(e);
         }
      };

      return <Button onPress={onPress} />;
   };
   return (
      <Auth0Provider domain={"dev-mvp8fq05h32j8h2e.us.auth0.com"} clientId={"sSNAtZfk0eObC9QbgcDJeNxar7Bm7tzM"}>
         <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 50 }}>Login screen</Text>
            <LoginButton />
            <TouchableOpacity onPress={() => props.navigation.push(navigationStrings.FORGOT_PASSWORD)}>
               <Text style={{ fontSize: 20, backgroundColor: "yellow", paddingVertical: 5, paddingHorizontal: 5 }}>
                  Forgot password
               </Text>
            </TouchableOpacity>
         </View>
      </Auth0Provider>
   );
}
