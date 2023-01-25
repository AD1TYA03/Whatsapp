import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

function InputBox() {
  const [newMessage, setNewMessage] = useState("");
  const onSend = () => {
    console.warn("sending new message", newMessage);
    setNewMessage("");
  };
  return (
    <View style={styles.container}>
      {/* icon */}
      <AntDesign name="plus" size={20} color="royalblue" />

      {/* text input */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder="Type your message..."
      />
      {/* icon */}
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={20}
        color="white"
      />
    </View>
  );
}

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: "lightgrey",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
});
