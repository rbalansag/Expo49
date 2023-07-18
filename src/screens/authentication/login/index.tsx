import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Toast } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import navigationStrings from "../../../navigation/constants/navigationStrings"

export default function Index(props) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>Login screen</Text>
         <TouchableOpacity onPress={() => props.navigation.push(navigationStrings.FORGOT_PASSWORD)}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5}}>Forgot password</Text>
         </TouchableOpacity>
      </View>
   );
}
