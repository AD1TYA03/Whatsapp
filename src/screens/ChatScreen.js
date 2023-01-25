import {View,Text,StyleSheet,ImageBackground , FlatList} from  'react-native'
import bg from "../../assets/images/BG.png"
import Message from '../components/Message'
import messages from "../../assets/data/messages.json"

function ChatScreen() {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      
     <FlatList style={styles.list}
      data={messages}
      renderItem={({item})=> <Message message={item}/>}
      inverted
     />
    
    </ImageBackground>
    
  )
}

export default ChatScreen

const  styles = StyleSheet.create({
bg:{
  flex:1,
},
list:{
  padding:10,
},
});
