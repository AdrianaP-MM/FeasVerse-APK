import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomTextInput = ({ placeholder, value, onChangeText, editable }) => {
    

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    autoCorrect={false}
                    blurOnSubmit
                    editable={editable}  // Aquí se agrega la propiedad editable
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1591CC',
        borderRadius: 5,
    },
    input: {
        flex: 1,
        padding: 15,
        fontSize: 16,
    },
    iconContainer: {
        padding: 10,
    },
});

export default CustomTextInput;
