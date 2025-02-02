import React from 'react';
import {useFormikContext} from 'formik';
import AppErrorMessage from '../AppErrorMessage';
import AppTextInput from '../AppText/AppTextInput';

function AppFormFields({name,width, ...otherProps}) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput 
                onBlur = {()=> setFieldTouched(name)}
                onChangeText = {handleChange(name)}
                width = {width}
                {...otherProps}/>

            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormFields;