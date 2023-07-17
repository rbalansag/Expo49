import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import ErrorBoundary from "react-native-error-boundary";

const ErrorFallback = ({ error, resetError }) => {
   return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Text>An error occurred:</Text>
         <Text>{error.message}</Text>
         <Button
            backgroundColor="#0000F0"
            label="Try Again"
            labelStyle={{ fontWeight: "600" }}
            marginT-30
            enableShadow
            onPress={resetError}
         />
      </View>
   );
};

const Index = ({ children }) => {
   const handleReset = (error: Error, stackTrace: string): void => {
      // Reset the error state
   };

   return (
      <ErrorBoundary onError={handleReset} FallbackComponent={ErrorFallback}>
         {children}
      </ErrorBoundary>
   );
};

export default Index;
