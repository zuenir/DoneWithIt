import { StyleSheet, Platform } from 'react-native'
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container_apptxti:{
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection:"row",
        padding: 15,
        marginVertical: 10,
    },

    icon_apptxti:{
        marginRight: 10,
    },
});

export default styles;