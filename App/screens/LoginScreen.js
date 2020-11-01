import React from 'react';
import * as Yup from 'yup';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';

import {AppForm, AppFormFields, AppSubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
    return (
       <Screen style={styles.container}>
           <Image 
                style={styles.logo}
                source={require("../assets/logo-red.png")}/>
            
            <AppForm
                initialValues={{email:'', password:''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>

            <AppFormFields
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                name="email"
                placeholder="Email"
                textContentType="emailAddress"/>

            <AppFormFields 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"/>
            
            <AppSubmitButton
                title="Login"/>

            </AppForm>
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },

    logo:{
       width: 80,
       height: 80,
       alignSelf: 'center',
       marginTop: 50,
       marginBottom: 20
    },
});

export default LoginScreen;