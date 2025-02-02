import React from 'react';
import * as Yup from 'yup'; 
import { AppForm, AppFormFields, AppFormImagePicker, AppFormPicker, AppSubmitButton } from '../components/Forms';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import AppCategoryPickerItem from '../components/AppPicker/AppCategoryPickerItem';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).label("Price"),
    category:Yup.object().required().nullable().label("Category"),
    description:Yup.string().label("Description"),
    images:Yup.array().min(1,"Please select at least on image.")
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
      },
      {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
      },
      {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
      },
      {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
      },
      {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
      },
      {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
      },
      {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
      },
      {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
      },
      {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
      },
];

function ListingEditScreen(props) {

  const location = useLocation();

  return (
      <Screen style={styles.container}>
          <AppForm 
              initialValues={{title:'',price:'',category:null,description:'', images:[]}}
              onSubmit={values => console.log(location)}
              validationSchema={validationSchema}>
                  
                  <AppFormImagePicker name="images"/>
                  
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
                      numberOfColumns={3}
                      AppPickerItemComponent = {AppCategoryPickerItem}
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