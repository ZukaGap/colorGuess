import React, { useState } from 'react'
import { StyleSheet, TouchableHighlight, Text, View, AsyncStorage } from 'react-native';
import Header from '../components/Header'
import AppSwitch from '../components/AppSwitch/index'


const retrieveData = async () => {
    try {
    let value = await AsyncStorage.getItem('difficulty');
    if (value !== null) {
        return value;
    }
    } catch (error) {
        console.log(error);
    }
};

export default function Options(props) {
    const [dificulty, setDifficulty] = useState(retrieveData());
    const [isEasy, setIsEasy] = useState(retrieveData() === 'easy' ? true:false);

    const _storeData = async () => {
        let diff = dificulty === 'easy' ? 'easy':'hard';
        let diffBoolean = dificulty === 'easy' ? true:false;
        setIsEasy(diffBoolean);
        try {
        await AsyncStorage.setItem(
            'difficulty', diff
        );
        } catch (error) {
        // Error saving data
            console.error(error);
        }
    };

    const changeOption = (value) => {
        if(value === 'hard') {
            setDifficulty('easy');
            setIsEasy(true);
        } else if(value === 'easy') {
            setDifficulty('hard');
            setIsEasy(false);
        }
    }

    return(
        <>
            <Header title="Options" />
            <TouchableHighlight style={styles.backButton}>
                <Text style={styles.backButtonText} onPress={() => props.onClick('')}>Back</Text>
            </TouchableHighlight>
            <View style={styles.body}>
                <AppSwitch value={isEasy} onChange={() => changeOption('easy')} label='Easy' />
                <AppSwitch value={!isEasy} onChange={() => changeOption('hard')} label='Hard' />
            </View>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText} onPress={() => _storeData()}>Apply</Text>
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