import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen.jsx';
import QuizzScreen from './components/Quizz/QuizzScreen.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <QuizzScreen/> */}
      <WelcomeScreen />
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
