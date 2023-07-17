// library imports
import React, { useCallback, useEffect, useState } from "react";
import { register } from "react-native-bundle-splitter";
import { View, LoaderScreen, Colors, KeyboardAwareScrollView } from "react-native-ui-lib";
import { TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { tKey, tValue } from "./types/index";

// component imports
const Landing = register<{ navigation }>({ loader: () => import("./components/landing"), name: "LandingComponent" });
const Form = register<{ getFormParam }>({ loader: () => import("./components/form"), name: "FormComponent" });
const Token = register<{ initialKey; initialValue }>({
   loader: () => import("./components/token"),
   name: "TokenComponent",
});

// types import
import { Todo } from "./types/index";

// API imports
import { fetchDataFromAPI } from "../../api/fetch";
import { postDataToAPI } from "../../api/post";
import { putDataToAPI } from "../../api/put";
import { patchDataToAPI } from "../../api/patch";
import axios from "axios";

const Index = (props) => {
   const [loading, setLoading] = useState<boolean>(true);

   const initialKey: tKey = "";
   const initialValue: tValue = "";

   // call API
   useEffect(() => {
      const cancelTokenSource = axios.CancelToken.source();

      const fetchData = async () => {
         try {
            const config = { cancelToken: cancelTokenSource.token };
            const data: Todo = await fetchDataFromAPI<Todo>("todos/1", config);
            console.log(data, 111111);
            setLoading(false);
         } catch (error) {
            console.log(error);
         }
      };

      const postData = async () => {
         try {
            const config = { cancelToken: cancelTokenSource.token };
            const data: Todo = await postDataToAPI<Todo>("todos", { title: "New Todo" }, config);
            console.log(data, 222222);
            setLoading(false);
         } catch (error) {
            console.log(error);
         }
      };

      const putData = async () => {
         try {
            const config = { cancelToken: cancelTokenSource.token };
            const data: Todo = await putDataToAPI<Todo>("todos/1", { completed: true }, config);
            console.log(data, 333333);
            setLoading(false);
         } catch (error) {
            console.log(error);
         }
      };

      const patchData = async () => {
         try {
            const config = { cancelToken: cancelTokenSource.token };
            const data: Todo = await patchDataToAPI<Todo>("todos/1", { title: "Updated Todo" }, config);
            console.log(data, 444444);
            setLoading(false);
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
      postData();
      putData();
      patchData();

      return () => {
         cancelTokenSource.cancel();
      };
   }, []);

   // get data from form
   const getFormParam = (form) => {
      console.log(form);
   };

   return (
      <KeyboardAwareScrollView>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View padding-s5>
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
