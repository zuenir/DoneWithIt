import React, {useState} from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import styles from './styles';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container_apptxti}>
           {
                icon && 
                <MaterialCommunityIcons 
                    name={icon}
                    size={20}
                    color={colors.medium}
                    style={styles.icon}/>
            }
            <TextInput 
                style={defaultStyles.text}
                {...otherProps}/> 
        </View>
    );
}

export default AppTextInput;