// library import
import React, { useEffect, useState } from "react";
import { preload } from "react-native-bundle-splitter";
import * as SplashScreen from "expo-splash-screen";
import { View, Text } from "react-native-ui-lib";
import { Asset } from "expo-asset";
import { Image } from "react-native";

// constant imports
import { AssetData } from "./constants/images";

const ChildComponent = () => {
   const [isPreLoad, setPreLoad] = useState(false);
   const [isLoadingComplete, setLoadingComplete] = useState(false);

   const cacheImages = async (images: Array<string | number>): Promise<void> => {
      const cacheTasks = images.map((image: string | number) => {
         if (typeof image === "string") {
            return Image.prefetch(image);
         }
         return Asset.fromModule(image).downloadAsync();
      });

      await Promise.all(cacheTasks);
   };

   useEffect(() => {
      let isMounted = true; // Flag to track if component is mounted

      const loadResourcesAndDataAsync = async () => {
         try {
            // Preload assets
            await cacheImages(AssetData);

            // Preload bundle
            preload().group("MAIN_STACK");

            // Prevent auto hide of SplashScreen
            SplashScreen.preventAutoHideAsync();

            // Set loading complete only if component is still mounted
            if (isMounted) {
               setLoadingComplete(true);
            }
         } catch (e) {
            console.warn(e);
         }
      };

      loadResourcesAndDataAsync();

      return () => {
         isMounted = false; // Update flag to indicate component is unmounted
      };
   }, []);

   useEffect(() => {
      if (!isLoadingComplete) {
         SplashScreen.hideAsync();
         setPreLoad(false);
      } else {
         setPreLoad(true);
      }
   }, [isLoadingComplete]);

   return isPreLoad;
};

export default ChildComponent;
