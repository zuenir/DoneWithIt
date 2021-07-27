import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import styles from './styles';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';

function AppTextInput({icon, width='100%', ...otherProps}) {
    return (
        <View style={[styles.container_apptxti, {width}]}>
           {
                icon && 
                <MaterialCommunityIcons 
                    name={icon}
                    size={20}
                    color={colors.medium}
                    style={styles.icon}/>
            }
            <TextInput 
                placeholderTextColor = {colors.medium}
                style={defaultStyles.text}
                {...otherProps}/> 
        </View>
    );
}

export default AppTextInput;