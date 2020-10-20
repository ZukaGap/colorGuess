import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage, TouchableHighlight } from 'react-native';
import randomArray from '../function/randomColor'
import Card from '../components/Card'
import Header from '../components/Header'

const GameScreen = (props) => {
    const [result, setResult] = useState();
    const [dataBuffer, setDataBuffer] = useState(randomArray());
    const [difficulty, setDifficulty] = useState('easy');

    const checkAnswer = (value) => {
        if(value === dataBuffer.correct) {
            setResult("Correct");
        } else {
            setResult("Wrong");
        }
    }
    
    const items = dataBuffer.array.map(curItem => {
        if(curItem.id !== 0)
            return (
                <TouchableOpacity key={curItem.id}
                                onPress= {() => checkAnswer(curItem.color)} 
                                style={[styles.buttonStyle,{backgroundColor: curItem.color}]}
                />
            )
    });


    useEffect(() => {
        _retrieveData();
        if(!result){
            setDataBuffer(randomArray());
        } else {
            setTimeout(()=> {
                setResult('');
                setDataBuffer(randomArray());
            },500)
        }
    },[result]);

    _retrieveData = async () => {
        try {
        const value = await AsyncStorage.getItem('difficulty');
        if (value !== null) {
            setDifficulty(value);
        }
        } catch (error) {
        // Error retrieving data
            console.log(error);
        }
    };

    _storeData = async () => {
        let difficulty = 'easy';
        try {
        await AsyncStorage.setItem(
            'difficulty', difficulty
        );
        } catch (error) {
        // Error saving data
            console.error(error);
        }
    };

  return (
    <>  
        <Header title="Guess a Color" />
        <TouchableHighlight style={styles.backButton}>
            <Text style={styles.backButtonText} onPress={() => props.onClick('')}>Back</Text>
        </TouchableHighlight>
        <View style={styles.container}>
            <Text style={[styles.result, {color: result === 'Wrong' ? 'red':'green'}]}>{result}</Text>
            <Card style={{width: 200}}>
                <Text style={styles.text}>{difficulty === 'easy' ? dataBuffer.correct : ''}</Text>
            </Card>
            <View style={styles.choose}>
                {items}
            </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-around'
  },
    buttonStyle: {     
        width: "35%",
        height: 100,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10
    },
    choose: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    text: {   
        color: 'black',
        fontSize: 22,
    },
    result: {
        fontSize: 18,
        justifyContent: 'center',
        marginTop: 10
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
}); 

export default GameScreen;