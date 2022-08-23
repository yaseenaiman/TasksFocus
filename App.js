import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  
} from 'react-native';
import Constants from 'expo-constants';
import { FocusHistory } from './src/features/FocusHistory';

import { colors } from './src/utils/colors';
import { Timer } from './src/features/Timer';
import { Focus } from './src/features/Focus';
import { TextInput } from 'react-native-paper';
import { Roundbutton } from './src/components/Roundbutton';

export default function App() {
  const [currentFocus, setCurrentFocus] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>

      {!currentFocus ? (
        <>
          <Focus addFocus={setCurrentFocus} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentFocus}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject={() => {
            setCurrentFocus(null);
          }}
        />
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
 

});
