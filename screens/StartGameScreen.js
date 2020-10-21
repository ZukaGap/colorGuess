import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function StartGameScreen({onClick}){
  return (
    <View style={styles.container}>
        <TouchableHighlight onPress={() => onClick("startGame")} style={styles.button} >
            <Text style={styles.text} >Start Game</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => onClick("option")} style={styles.button}>
            <Text style={styles.text} >Option</Text>
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        color: '#87b5ff',
        fontSize: 18
    }
}); 