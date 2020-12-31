import React, { usestate } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync ({
    'open-sans': require('assets/fonts/OpenSans-regular.ttf'),
    'open-sans-bold': require('assets/fonts/OpenSans-Bold-regular.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber ] = userState();
  const [guessRounds, setGuessRounds ] = userState(0);
  const [dataLoaded, setDataLoaded ] = userState(false);

  if(!dataLoaded) {
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded (true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  function configureNewGameHandler() {
    setUserNumber(selectedNumber);
    setGuessRounds(0)
    setUserNumber(null)
  }

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGuessRounds(0)
  }

  function gameOverHandler(numOfRounds) {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={gameOverHandler}
      />
    );
  } else if (guessRounds > 0 ) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={StyleSheet.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
  const styles = StyleSheet.create({
    screen: {
      flex:1,
    },
  })
   }
