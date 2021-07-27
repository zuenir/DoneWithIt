import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../../config/styles';
import styles from './styles';
import AppText from '../AppText';
import Screen from '../Screen';
import AppPickerItem from './AppPickerItem';

function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    AppPickerItemComponent = AppPickerItem,
    placeholder,
    selectedItem,
    width = "100%",
  }) {
    const [modalVisible, setModalVisible] = useState(false);
  
    return (
      <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={[styles.container, { width }]}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
              />
            )}
            {selectedItem ? (
              <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
              <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}
  
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={defaultStyles.colors.medium}
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              numColumns={numberOfColumns}
              renderItem={({ item }) => (
                <AppPickerItemComponent
                  item={item}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </Screen>
        </Modal>
      </>
    );
  }

export default AppPicker;