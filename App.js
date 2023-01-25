import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';
import Navigator from './src/Navigation/Navigator';


import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

 function App() {
  
  
  return (
    <View style={styles.container}>
     <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
export default  withAuthenticator(App);