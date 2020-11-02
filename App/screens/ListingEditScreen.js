import React from 'react';
import * as Yup from 'yup';
import { AppForm, AppFormFields, AppFormPicker, AppSubmitButton } from '../components/Forms';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import AppPicker from '../components/AppPicker/AppPicker';

const validationSchema = Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().label("Price"),
    category:Yup.object().required().nullable().label("Category"),
    description:Yup.string().label("Description"),
});

const categories = [
    {label:"Furniture", value:1},
    {label:"Closthing", value:2},
    {label:"Camera", value:3},
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={{title:'',price:'',category:null,description:''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                    <AppFormFields 
                        maxLength={255}
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="title"
                        placeholder="Title"/>

                    <AppFormFields 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        name="price"
                        placeholder="0,00 AKZ"/>

                    <AppFormPicker
                        items={categories}
                        name="category"
                        placeholder="Category"/>

                    <AppFormFields 
                        maxLength={255}
                        multiline
                        name="description"
                        numberOfLines={3}
                        placeholder="Description"/>

                    <AppSubmitButton 
                        title="Post"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },    
});

export default ListingEditScreen;