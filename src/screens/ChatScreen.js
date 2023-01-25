import {View,Text,StyleSheet,ImageBackground , FlatList ,KeyboardAvoidingView} from  'react-native'
import bg from "../../assets/images/BG.png"
import Message from '../components/Message'
import messages from "../../assets/data/messages.json"
import InputBox from '../components/InputBox'

function ChatScreen() {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS==='ios' ? "padding" : "height"}
    style={styles.bg}
    >
    <ImageBackground source={bg} style={styles.bg}>
      
     <FlatList style={styles.list}
      data={messages}
      renderItem={({item})=> <Message message={item}/>}
      inverted
     />
    <InputBox/>
    </ImageBackground>
    </KeyboardAvoidingView>
    
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
