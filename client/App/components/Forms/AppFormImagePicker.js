import React from 'react';
import { AppErrorMessage } from '../AppErrorMessage';
import {useFormikContext} from 'formik';
import AppImageInputList from '../AppImage/AppImageInputList';

function AppFormImagePicker({name}) {
    
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const imageUris = values[name];

    const handleAdd = uri => {
        setFieldValue(name,[...imageUris,uri]);
      };
    
      const handleRemove = (uri) => {
        setFieldValue(
          name,
          imageUris.filter((imageUri) => imageUri !== uri)
        );
      };

    return (
        <>
            <AppImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}/>
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormImagePicker;