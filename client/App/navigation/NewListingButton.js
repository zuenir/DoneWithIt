import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: colors.primary,
        height: 80,
        width:80,
        bottom: 20,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
    },
});

export default NewListingButton;
