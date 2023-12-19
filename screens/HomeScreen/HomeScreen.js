import * as React from "react";
import { View, Text,SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { sizes, spacing } from "../../constants/theme";
import ToolbarHome from "../../components/ToolbarHome";
import CategoriesFilter from "../../components/CategoriesFilter";
import BookListScreen from "../../components/BookListScreen";
import { Searchbar } from 'react-native-paper';
import { colors } from "react-native-tailwindcss";

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToolbarHome title="HomeScreen" />
      {/* Search Filter */}
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      iconColor="#ECB43A"
      style={{
        backgroundColor: colors.COLOR_PRIMARY,
      }}
    />
      <View style={{ marginTop: 22, marginHorizontal: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/* Categories list */}
        <CategoriesFilter />
      </View>
      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1, marginHorizontal: 8 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Books</Text>
        {/* Recipes list */}
        <BookListScreen />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: "bold",
  },
});
