import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import ContactListItems from "../components/ContactListItems";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";

function ContactScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then((res) => {
      setUsers(res?.data?.listUsers?.items);
    });
  },[]);
  return (
    <FlatList
      style={styles.container}
      data={users}
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
