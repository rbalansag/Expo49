// library imports
import React from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import * as yup from "yup";
import { View, Text, TextField, Button } from "react-native-ui-lib";
import { FormValues } from "../types/index";

// constant import
import { email, password } from "../constants";

// styling import
import { styles } from "../styling/index";

const Index = (props): JSX.Element => {
   // Define the validation schema using Yup
   const validationSchema = yup.object().shape({
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup.string().required("Password is required"),
   });

   // Handle form submission
   const handleSubmit = (values: FormValues) => {
      props.getFormParam(values);
   };

   return (
      <View padding-s5>
         <Formik initialValues={{ email, password }} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(formikProps: FormikProps<FormValues>) => (
               <View>
                  <Text>Email</Text>
                  <Field
                     name="email"
                     style={styles.textInput}
                     component={TextField}
                     placeholder="Email"
                     onChangeText={formikProps.handleChange("email")}
                     value={formikProps.values.email}
                  />
                  <ErrorMessage name="email" component={Text} />

                  <Text>Password</Text>
                  <Field
                     name="password"
                     style={styles.textInput}
                     component={TextField}
                     placeholder="Password"
                     onChangeText={formikProps.handleChange("password")}
                     value={formikProps.values.password}
                     secureTextEntry
                  />
                  <ErrorMessage name="password" component={Text} />
                  <Button
                     backgroundColor="#0000F0"
                     label="Submit"
                     labelStyle={{ fontWeight: "600" }}
                     marginT-30
                     enableShadow
                     onPress={formikProps.handleSubmit}
                  />
               </View>
            )}
         </Formik>
      </View>
   );
};

export default Index;
