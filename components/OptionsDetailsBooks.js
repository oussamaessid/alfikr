// FileName: App.js

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { optionsList } from "../constants/Constant";

const ExpandableListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.itemTouchable}>
        <View style={styles.icondown}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <FontAwesome
          name={expanded ? "angle-up" : "angle-down"}
          size={28}
        />
        </View>
      </TouchableOpacity>
      {expanded && <Text style={styles.itemContent}>{item.content}</Text>}
    </View>
  );
};

const ExpandableList = ({ data }) => {
  const renderItem = ({ item }) => <ExpandableListItem item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const OptionsDetailsBooks = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.subheader}>Options List View</Text>
      <ExpandableList data={optionsList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "green",
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
  },
  itemTouchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemContent: {
    marginTop: 10,
    fontSize: 14,
    color: "#666",
  },
  icondown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default OptionsDetailsBooks;
