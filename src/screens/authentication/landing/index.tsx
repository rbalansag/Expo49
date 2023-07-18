import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Toast } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import navigationStrings from "../../../navigation/constants/navigationStrings"

export default function Index(props) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>landing</Text>
         <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.SIGNUP)}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5}}>Signup</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.LOGIN)}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.PIN)}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Enter PIN</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.AUTHENTICATED)}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Authenticated user</Text>
         </TouchableOpacity>
      </View>
   );
}
