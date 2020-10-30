import React from 'react';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { View } from 'react-native';

function AppIcon({name,size = 40, backgroundColor = colors.black ,iconColor = colors.white}) {
    return (
        <View style={{ 
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center"}}>
            <MaterialCommunityIcons
                name= {name}
                color = {iconColor}
                size = {size * 0.5}
            />
        </View>
    );
}

export default AppIcon;