// library imports
import React, { useCallback, useEffect, useState } from "react";
import { register } from "react-native-bundle-splitter";
import { View, LoaderScreen, Colors, KeyboardAwareScrollView } from "react-native-ui-lib";
import { TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { Key, Value } from "./types/index";
import usePreRender from "../../onStart/useCachedResouces";
import useNetworkStatus from "../../onStart/useNetworkStatus";

// component imports
const Landing = register<{ navigation }>({ loader: () => import("./components/landing"), name: "LandingComponent" });
const Form = register<{ getFormParam }>({ loader: () => import("./components/form"), name: "FormComponent" });
const Token = register<{ initialKey; initialValue }>({
   loader: () => import("./components/token"),
   name: "TokenComponent",
});

const Index = (props) => {
   const [loading, setLoading] = useState<boolean>(true);

   const initialKey: Key = "";
   const initialValue: Value = "";

   // call API that dont need token
   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;

      setTimeout(() => {
         setLoading((prev) => (prev = false));
      }, 2500);

      return () => {
         controller.abort();
      };
   }, []);

   // get data from form
   const getFormParam = (form) => {
      console.log(form, 1212);
   };
   // use: returns network status
   // return: boolean
   const hasNetwork = useNetworkStatus();

   // use: retain and remove splash screen when preload is done
   // return: boolean
   const preRender = usePreRender();


   return (
      <KeyboardAwareScrollView>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View padding-s5>
                  <Text>Has network: {hasNetwork?.toString()}</Text>
                  <Text>Has prerendered: {preRender?.toString()}</Text>
               {/* Loader sample */}
               {loading && <LoaderScreen color={Colors.blue30} message="Loading..." overlay />}
               {/* Navigation sample */}
               <Landing navigation={props.navigation} />
               {/* Formik + Yup sample */}
               <Form getFormParam={getFormParam} />
               {/* Secure token and data storage saving - 2048 bytes MAX*/}
               <Token initialKey={initialKey} initialValue={initialValue} />
            </View>
         </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
   );
};

export default Index;
