
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreen';
import { StyleSheet } from 'react-native';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer style={styles.container} >
    <Stack.Navigator>
    <Stack.Screen name='Home' component={MainTabNavigator}  options={{headerShown:false}}/>
    <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
});