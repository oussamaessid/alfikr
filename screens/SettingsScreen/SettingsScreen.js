import * as React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Toolbar from "../../components/Toolbar";

export default function SettingsScreen({ navigation }) {
  return (
    <View >
      <Toolbar title="SettingsScreen" />
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "#ECB43A",
    paddingHorizontal: 10,
  },
  backButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    color: "white",
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  rightButton: {
    width: 40,
  },
});
