 import React, {useState} from 'react';
import { FlatList, StyleSheet, Platform, StatusBar, View } from 'react-native';
import ListItemSeparator from '../components/AppList/ListItemSeparator';
import ListItem from '../components/AppList/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemDeleteAction from '../components/AppList/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title:'T1',
        description: 'D1',
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title:'T2',
        description: 'D2',
        image: require("../assets/mosh.jpg")
    }
];

 function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        //Delete the message from messages
        //.Call.the.server   
        setMessages(messages.filter(m => m.id !== message.id));
    }

     return (
         <Screen>
            <FlatList
                data = {messages}
                keyExtractor = {message => message.id.toString()}
                renderItem = {({item})=> ( 
                    <ListItem
                        title = {item.title}
                        subTitle = {item.description}
                        image = {item.image}
                        onPress = {()=> console.log("Message selected", item)}
                        renderRightActions = {()=> 
                            <ListItemDeleteAction 
                                onPress = {()=> handleDelete(item)} />}
                    />
                )} 

                ItemSeparatorComponent = {ListItemSeparator}
                refreshing = {refreshing}
                onRefresh = {()=>{
                    setMessages([
                        {
                            id: 2,
                            title:'T2',
                            description: 'D2',
                            image: require("../assets/mosh.jpg")
                        }
                    ]);
                }}
             />
         </Screen>
     );
 }
 
 const styles = StyleSheet.create({
    
 });

 export default MessagesScreen;