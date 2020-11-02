import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

function AppCategoryPickerItem({item, onPress}) {
    return (
        <View style={styles.container}>
            <AppIcon backgroundColor={item.backgroundColor} name={item.icon} size={50}/>
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