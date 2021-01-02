import React from 'react';
import { NativeAppEventEmitter } from 'react-native';
import { View, StyleSheet } from 'react-native';

export default function Card(props ) {
    return (
        <View style={{ ...StyleSheet.card, ...props.style }}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 5,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    },
  }); t