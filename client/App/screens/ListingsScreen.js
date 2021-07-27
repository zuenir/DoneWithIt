import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import AppCard from '../components/AppCard/AppCard';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';

const listings = [
    {
        id: 1,
        title : "Red jack for sale",
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title : "Couch in great condition",
        price: 1500,
        image: require('../assets/couch.jpg')
    },
    {
        id: 3,
        title : "Chair in great condition",
        price: 2400,
        image: require('../assets/chair.jpg')
    }
];

function ListingsScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                showsVerticalScrollIndicator = {false}
                data = {listings}
                keyExtractor = {listing => listing.id.toString()}
                renderItem = {({item}) => 
                    <AppCard 
                        title={item.title}
                        subTitle={item.price + ",00 AKZ"}
                        image={item.image}
                        onPress={()=> navigation.navigate(routes.LISTING_DETAILS, item)}/>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding: 10,
        backgroundColor: colors.light,
    }
})

export default ListingsScreen;