import React from "react";
import { View, Text, FlatList } from "react-native";
import { editeurList } from "../constants/Constant";
import { StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function FiltrerListBooks({}) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckBoxChange = (title) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <View>
      <FlatList
        data={editeurList}
        renderItem={({ item }) => (
          <View style={{ marginTop: 22, marginHorizontal: 16 }}>
            <Text style={styles.text}>{item.category}</Text>
            <View style={styles.container}>
              {item.data.map((dataItem) => (
                <View style={styles.section} key={dataItem.id}>
                  <Checkbox
                    style={styles.checkbox}
                    value={checkedItems[dataItem.title]}
                    onValueChange={() => handleCheckBoxChange(dataItem.title)}
                    color={checkedItems[dataItem.title] ? "#ECB43A" : undefined}
                  />
                  <Text style={styles.paragraph}>{dataItem.title}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
