import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native'
import AppText from '../AppText';
import styles from './styles';

function AppCard({title, subTitle, image, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>          
            </View>
       </TouchableWithoutFeedback>
    );
}

export default AppCard;