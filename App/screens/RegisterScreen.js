import React from 'react';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import { AppForm , AppFormFields, AppSubmitButton} from '../components/Forms';

const validationSchema = Yup.object().shape({
    name:Yup.string().required().label("Name"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{name:'',email:'',password:''}}
                onSubmit={values => console.log(values)}
                validationSchema = {validationSchema}>

                <AppFormFields
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"/>   

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
                    title="Register"/>

            </AppForm>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
});

export default RegisterScreen;