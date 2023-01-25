import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ContactListItems from "../components/ContactListItems";
import chats from "../../assets/data/chats.json";
function ContactScreen() {
  return (
    <FlatList
      style={styles.container}
      data={chats}
      renderItem={({ item }) => <ContactListItems chat={item} />}
    />
  );
}

export default ContactScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
