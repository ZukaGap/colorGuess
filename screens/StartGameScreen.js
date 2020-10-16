import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import randomColor from '../function/randomColor'

const color = randomColor();

const data = [
    {
        color,
        id: 1
    },
    {
        color: randomColor(),
        id: 2
    },
    {
        color: randomColor(),
        id: 3
    },
    {
        color: randomColor(),
        id: 4
    },
]

const StartGameScreen = () => {
    const [randomColor,setRandomColor] = useState(data);

    const items = data.map(curItem => {
        return (
            <TouchableOpacity key={curItem.id} style={[styles.buttonStyle,{backgroundColor: curItem.color}]}>
                <Text>{curItem.id}</Text>
            </TouchableOpacity>
        )
    });

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{color}</Text>
        <View style={styles.choose}>
        {items}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10,
      margin: 10,
  },
  buttonStyle: {     
      width: "35%",
      height: 100,
      borderRadius: 5,
      backgroundColor: 'red',
      marginVertical: 10,
      marginHorizontal: 10
  },
  choose: {
      margin: 0,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
  },
  text: {   
      flex:1,      
  }
}); 

export default StartGameScreen;