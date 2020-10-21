import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableHighlight, Text, View, AsyncStorage } from 'react-native';
import Header from '../components/Header'
import AppSwitch from '../components/AppSwitch/index'

import { retrieveData, storeData } from '../function/localStorage'

export default function Options(props) {
    const [difficulty, setDifficulty] = useState();
    const [isEasy, setIsEasy] = useState();
    const [pos, setPos] = useState();

    const changeOption = () => {
        if(isEasy) {
            setDifficulty('hard');
            setIsEasy(true);
            setPos(e => !e);
        } else if(!isEasy) {
            setDifficulty('easy');
            setIsEasy(false);
            setPos(e => !e);
        } 
    }

    useEffect(() => {
        retrieveData('difficulty')
        .then(promise => {
            let diff = promise === 'easy' ? true:false;
            setDifficulty(promise);
            setIsEasy(diff);
            setPos(!diff);
        });        
    }, [])

    return(
        <>
            <Header title="Options" />
            <TouchableHighlight style={styles.backButton}>
                <Text style={styles.backButtonText} onPress={() => props.onClick('')}>Back</Text>
            </TouchableHighlight>
            <View style={styles.body}>
                <AppSwitch value={pos} onChange={() => changeOption()} label1='Easy' label2='Hard' />
            </View>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText} onPress={() => storeData('difficulty', difficulty)}>Apply</Text>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    body: {

    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems: 'center',
        margin: 20,
        color: 'red'
    },
    buttonText: {
        fontSize:20,
        backgroundColor: '#87b5ff',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 100,
        letterSpacing: 3,
        color: 'white'
    },
    backButton: {
        margin: 10,
        alignItems: 'flex-start'
    },
    backButtonText: {
        backgroundColor: 'transparent',
        color: '#87b5ff',
        fontSize: 20
    }
})