import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import MyProfile from './src/MyProfile';
import { myProfile } from './src/data';
import Margin from './src/Margin';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView 
    //     style={styles.container} 
    //     edges={['right', 'left']} // 예외없이 모두 안전영역 적용
    //   >
    //     <Header />
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <View style={styles.container}>
      <Header />

      <Margin height={10} />

      <MyProfile 
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  },
});
