import { View, Text, Image, StyleSheet ,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import dayjs from "dayjs";
import relativeTime from  "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);


function ChatListItems({chat}) {
    const navigation = useNavigation();
  return (
    <Pressable onPress={()=>{navigation.navigate('Chat',{id: chat.id,name: chat.user.name})}} style={styles.container}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
           {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
}

export default ChatListItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    
  },
  image: { width: 60, 
    height: 60, 
    borderRadius: 30,
     marginRight: 10 
    },

  content: {
    flex: 1,
    borderBottomColor:"lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: { flex: 1, fontWeight: "bold" },
  subTitle: {
    color: "grey",
  },
});
