import { FlatList,StyleSheet } from "react-native"
import ChatListItems from "../components/ChatListItems";
import chats from "../../assets/data/chats.json";
function ChatsScreen() {
  return (
   <FlatList style={styles.container}
    data={chats}
    renderItem={({item})=> <ChatListItems chat={item}/>}
   />
  )
}

export default ChatsScreen
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});