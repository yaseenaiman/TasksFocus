import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from '../utils/colors';
import {spacing} from '../utils/sizes'
import { TextInput } from 'react-native-paper';
import { Roundbutton } from '../components/Roundbutton';

export const Focus = ({ addFocus }) => {
  const [focusitem, setFocusitem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textInput}
          label="Type what u want to focus on"
          value={focusitem}
          onChangeText={setFocusitem}
        />
        <View style={styles.button}>
          <Roundbutton
            title="+"
            size={50}
            onPress={() => addFocus(focusitem)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },

  inputcontainer: {
    padding: spacing.lg,
   
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    paddingRight: spacing.sm,
    marginRight: spacing.sm,
    justifyContent: 'center',
  },
});
