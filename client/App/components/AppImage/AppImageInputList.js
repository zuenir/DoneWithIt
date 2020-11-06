import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import AppImage from "./AppImage";


function AppImageInputList({imageUris = [], onRemoveImage, onAddImage}) {

    const scrollView = useRef();

    return (
        <View>
            <ScrollView
                ref={scrollView}
                horizontal
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <AppImage
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                    <AppImage onChangeImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        marginRight: 10,
    },
});

export default AppImageInputList;