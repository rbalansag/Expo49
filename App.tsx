import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { AppRegistry, Platform, StyleSheet } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { register } from "react-native-bundle-splitter";
import { API_URL } from "@env";
import {
   Text,
   View,
   Toast,
   Dialog,
   Colors,
   PanningProvider,
   RadioGroup,
   RadioButton,
   Switch,
   Constants,
} from "react-native-ui-lib";

import { store, persistor } from "./src/redux/store";
import usePreRender from "./src/onStart/useCachedResouces";
import useNetworkStatus from "./src/onStart/useNetworkStatus";
import ErrorBoundary from "./src/screens/404";
import Navigation from "./src/navigation";

const App = () => {
   const hasNetwork = useNetworkStatus();
   const [toastVisible, setToastVisible] = useState(hasNetwork);

   useLayoutEffect(() => {
      setToastVisible(true);
   }, [hasNetwork]);

   const toastContent = useMemo(
      () =>
         !toastVisible ? null : (
            <Toast
               visible={true}
               backgroundColor={"transparent"}
               position={"top"}
               autoDismiss={5000}
               onDismiss={() => setToastVisible(false)}
               swipeable={true}
            >
               <View
                  style={{
                     backgroundColor: hasNetwork ? "#0ad140" : "#bf0820",
                     height: 50,
                     borderRadius: 100,
                     justifyContent: "center",
                     alignItems: "center",
                     marginHorizontal: 30,
                     borderColor: "#FFF",
                     top: 60,
                  }}
               >
                  <Text text60 color={"#fff"}>
                     You are {hasNetwork ? "back online" : "in offline mode"}
                  </Text>
               </View>
            </Toast>
         ),
      [toastVisible, hasNetwork]
   );

   return (
      <ErrorBoundary>
         {toastContent}
         {Platform.OS === "android" && <StatusBar style="light" backgroundColor={"#000"} />}
         <Provider store={store}>
            <PersistGate loading={false} persistor={persistor}>
               <NavigationContainer>
                  <Navigation />
               </NavigationContainer>
            </PersistGate>
         </Provider>
      </ErrorBoundary>
   );
};

export default App;
