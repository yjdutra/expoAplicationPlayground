import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import OPenTargetApp from './src/components/OpenTargetApp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Playground for try new features</Text>
      {/* <OPenTargetApp/> */}
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
