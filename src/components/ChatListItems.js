import { View, Text, Image, StyleSheet } from "react-native";

function ChatListItems() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            Aditya
          </Text>
          <Text style={styles.subTitle}>12:00</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          I am gonna build it
        </Text>
      </View>
    </View>
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
