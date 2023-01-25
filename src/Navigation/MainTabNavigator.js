import { View ,StyleSheet } from "react-native"
import NotImplementedScreen from "../screens/NotImplemented";
import ChatsScreen from "../screens/chatsScreen/ChatsScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons ,Entypo} from '@expo/vector-icons';
import SettingsScreen from "../screens/SettingsScreen";


const Tab=createBottomTabNavigator();
function MainTabNavigator() {
  return (
  <Tab.Navigator
  screenOptions={{tabBarStyle: { backgroundColor: "whitesmoke" },
    headerStyle: { backgroundColor: "whitesmoke" },}}
    initialRouteName="Chats"
  >
    <Tab.Screen  name="Status"
        component={NotImplementedScreen}
        options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="logo-whatsapp" size={size} color={color} />
    ),
  }}
        />


    <Tab.Screen  name="Calls"
        component={NotImplementedScreen}
        options={{
    tabBarIcon: ({ color, size }) => (
     <Ionicons name="call-outline" size={size} color={color} />
    ),
  }}
        />

<Tab.Screen  name="Camera"
        component={NotImplementedScreen}
        options={{
    tabBarIcon: ({ color, size }) => (
        <Ionicons name="camera-outline" size={size} color={color} />
    ),
  }}
        />

<Tab.Screen  name="Chats"
        component={ChatsScreen}

        options={({navigation})=>({
    tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
    ),
    headerRight: () => (
  <Entypo
  onPress={()=>{navigation.navigate('Contacts')}}
    name="new-message"
    size={18}
    color={"royalblue"}
    style={{ marginRight: 15 }}
    
  />
),
  })}
        />

<Tab.Screen  name="Settings"
        component={SettingsScreen}

        options={{
    tabBarIcon: ({ color, size }) => (
        <Ionicons name="settings-outline" size={size} color={color} />
    ),
  }}
        />

  
  </Tab.Navigator>
  )
}

export default MainTabNavigator

const styles = StyleSheet.create({


});