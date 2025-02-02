import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

function AppCategoryPickerItem({item, onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <AppIcon backgroundColor={item.backgroundColor} name={item.icon} size={50}/>
            </TouchableOpacity>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems:"center",
        width:"33%",
    },
    label: {
        marginTop: 5,
        textAlign:"center",
    }
});

export default AppCategoryPickerItem;