import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Toast } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import navigationStrings from "../../../../navigation/constants/navigationStrings"

export default function Index(props) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>Company list screen</Text>
         <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.NEW_LOG)}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Finish/Send log</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.REVIEW_EDIT_COMPANY)}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Edit Company</Text>
         </TouchableOpacity>
      </View>
   );
}
