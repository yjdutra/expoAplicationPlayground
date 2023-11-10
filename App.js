import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import OpenURLButton from './src/components/OpenUrlButton';
import OPenTargetApp from './src/components/OpenTargetApp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Playground for try new features</Text>
      <OPenTargetApp/>
      <OpenURLButton url={'controltabletsmartek'}>
        'Open appTablet Tools witch react-native lib'
      </OpenURLButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
