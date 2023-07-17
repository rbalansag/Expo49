// library import
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { View, Text, TextField, Button } from "react-native-ui-lib";
import { tKey, tValue } from "../types/index";

// styling import
import { styles } from "../styling/index";

// set to token storage
const save = async (key: tKey, value: tValue): Promise<void> => {
   await SecureStore.setItemAsync(key, value);
};

// get to token storage
const getValueFor = async (key: tKey): Promise<void> => {
   let result = await SecureStore.getItemAsync(key);
   if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
   } else {
      alert("No values stored under that key.");
   }
};

const Index = ({ initialKey, initialValue }): JSX.Element => {
   const [key, setKey] = useState<tKey>(initialKey);
   const [value, setValue] = useState<tValue>(initialValue);

   const handleSave = (): void => {
      save(key, value)
         .then(() => {
            setKey("");
            setValue("");
         })
         .catch((error) => {
            console.error("Error saving item:", error);
         });
   };

   const handleGet = (enteredKey: tKey): void => {
      getValueFor(enteredKey).catch((error) => {
         console.error("Error getting value for key:", error);
      });
   };

   return (
      <View padding-s5>
         <Text style={styles.paragraph}>Save an item, and grab it later!</Text>
         <TextField placeholder="Your key here" style={styles.textInput} onChangeText={setKey} value={key} />
         <TextField placeholder="Your value here" style={styles.textInput} onChangeText={setValue} value={value} />
         <Button
            backgroundColor="#0000F0"
            label="Save this key/value pair"
            labelStyle={{ fontWeight: "600" }}
            marginT-30
            enableShadow
            onPress={handleSave}
         />
         <Text style={styles.paragraph}>🔐 Enter your key then press return on keyboard 🔐</Text>
         <TextField
            placeholder="Enter the key for the value you want to get"
            style={styles.textInput}
            onSubmitEditing={(event) => {
               handleGet(event.nativeEvent.text);
            }}
         />
      </View>
   );
};

export default Index;
