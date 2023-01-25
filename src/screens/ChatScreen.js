import {View,Text,StyleSheet,ImageBackground , FlatList ,KeyboardAvoidingView, Platform} from  'react-native'
import bg from "../../assets/images/BG.png"
import Message from '../components/Message'
import messages from "../../assets/data/messages.json"
import InputBox from '../components/InputBox'
import {useNavigation, useRoute} from '@react-navigation/native'

function ChatScreen() {
const route=useRoute();
const navigation = useNavigation();

navigation.setOptions({headerTitle: route.params.name});
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS==='ios' ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS==='ios' ?60:180}
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
