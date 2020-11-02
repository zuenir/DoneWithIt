import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import styles from './styles';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';
import AppText from '../AppText';
import Screen from '../Screen';
import AppPickerItem from './AppPickerItem';

function AppPicker({icon, items, onSelectItem, placeholder, selectedItem }) {
    
    const [modalVisible,setModalVisible] = useState(false);
    
    return (
        <>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && 
                        (<MaterialCommunityIcons 
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}/>
                    )}

                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    )   :   (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    
                    <MaterialCommunityIcons 
                        name="chevron-down"
                        size={20}
                        color={colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={()=> setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => 
                            <AppPickerItem
                                label={item.label}
                                onPress={()=>{
                                  setModalVisible(false);
                                  onSelectItem(item);  
                                }
                            }/>
                        }/>
                </Screen>
            </Modal>
        </>
    );
}

export default AppPicker;