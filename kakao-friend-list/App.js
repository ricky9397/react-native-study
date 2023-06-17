import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView 
        style={styles.container} 
        edges={['right', 'left']} // 예외없이 모두 안전영역 적용
      >
        <Header />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  },
});
