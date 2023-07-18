import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Toast } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import navigationStrings from "../../../../navigation/constants/navigationStrings"

export default function Index(props) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>overview screen</Text>
         
         {props.route.params?.screen_for === "previous_day" ?
            <>
               <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.EVENT_DETAILS)}>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Log an event</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.REVIEW_LIST)}>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>List view</Text>
               </TouchableOpacity>
            </>
         : props.route.params?.screen_for === "history" ?
            <>
               <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.VIEW_EVENT)}>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>View an event</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.HISTORY_LIST_VIEW, {screen_for: props.route.params?.screen_for})}>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>List View</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.EXPORT)}>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Export</Text>
               </TouchableOpacity>
            </>
         :
            <>
               <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.EVENT_DETAILS)}>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Log an event</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.REVIEW_LIST)}>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Review/Complete</Text>
               </TouchableOpacity>
            </>
         }
      </View>
   );
}
