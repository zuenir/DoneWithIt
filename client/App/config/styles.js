import { StyleSheet, Platform } from 'react-native'
import colors from './colors'

export default {
    colors,
    text: {
        color: colors.dark,
        fontSize: Platform.OS === "android" ? 18 : 20,
        fontFamily:Platform.OS === "android" ? "Roboto" : "Avenir", 
    },
}