import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <Text>Text here</Text>
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
