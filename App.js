import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/gameScreen'
import Options from './screens/option'

export default function App() {
  const [page, setpage] = useState();

  const changePage = (page) => {
    setpage(page);
  }

  const PageRoute = (props) => {
    if(page === 'option') return (<Options onClick={e => props.onClick(e)} />)
    else if(page === 'startGame') return (<GameScreen onClick={e => props.onClick(e)} />)
    else return (<StartGameScreen onClick={e => props.onClick(e)} />) 
  }

  return (
    <View style={styles.container}>
      {
        <PageRoute onClick={e => changePage(e)} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
}); 