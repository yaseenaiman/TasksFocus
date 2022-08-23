import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { Roundbutton } from '../components/Roundbutton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { useKeepAwake } from 'expo-keep-awake';

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
    4 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS,
  ];

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
  onTimerEnd(focusSubject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.coundown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View style={{ paddingTop: spacing.xxl, alignItems: 'center' }}>
          <Text style={styles.titlee}>I am focusing on</Text>

          <Text style={styles.task}>{focusSubject}</Text>
        </View >
      </View>
        <>
        <View style={styles.timingWrapper}>
      <View style={styles.timingButton}>
        <Roundbutton size={75} title="10" onPress={(minutes) => setMinutes(10)} />
      </View>
      <View style={styles.timingButton}>
        <Roundbutton size={75} title="50" onPress={(minutes) => setMinutes(15)} />
      </View>
      <View style={styles.timingButton}>
        <Roundbutton size={75} title="20" onPress={(minutes) => setMinutes(20)} />
      </View>
      </View>
    </>
    <View style={{ paddingTop: spacing.sm }}>
      <ProgressBar  progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <Roundbutton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <Roundbutton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.buttonWrapper2}>
        <Roundbutton size={75} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coundown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonWrapper2: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlee: {
    color: colors.white,

    fontWeight: 'bold',
    textAlign: 'center',
  },

  task: {
    color: colors.white,
    textAlign: 'center',

  },

   timingButton: {
    flex: 1,
    alignItems: 'center',
    
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
        paddingBottom: spacing.xxl,

  },

  
});
