import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants.colors';

export default function Header (props) {
    return (
        <View style={StyleSheet.header}>
            <Text style={StyleSheet.header}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
    },
});