import React from 'react';
import ListItem from '../components/AppList/ListItem';
import Screen from '../components/Screen';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppIcon from '../components/AppIcon';
import ListItemSeparator from '../components/AppList/ListItemSeparator';
import routes from '../navigation/routes';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name:"format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name:"email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
];

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Zuenir Claudio"
                    subTitle = "zuenirlima@gmail.com"
                    image={require("../assets/mosh.jpg")}/>
            </View>
            
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent = {ListItemSeparator}
                    renderItem={({item}) => 
                    <ListItem 
                        title={item.title}
                        IconComponent=
                        {
                            <AppIcon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                        }
                        onPress={()=> navigation.navigate(item.targetScreen)}
                    />}
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={
                    <AppIcon
                        name="logout"
                        backgroundColor="#ffe66d"/>
                }/>
        </Screen>
    );
}


const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
});

export default AccountScreen;