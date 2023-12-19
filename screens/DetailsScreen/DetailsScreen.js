import * as React from "react";
import { View, Text, SafeAreaView,TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "react-native-tailwindcss";
import ToolbarHome from "../../components/ToolbarHome";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import FiltrerListBooks from "../../components/FiltrerListBooks";

export default function DetailsScreen({onPress }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToolbarHome title="Filtrer" />

      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor="#ECB43A"
        style={{
          backgroundColor: colors.COLOR_PRIMARY,
        }}
      />
      <View style={{ marginTop: 22, flex: 1, marginHorizontal: 16 }}>
        <View style={styles.filterHeader}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>FILTRER PAR</Text>
        <TouchableOpacity  onPress={onPress}>
          <View>
            <Icon name="filter" size={30} color="#ECB43A" />
          </View>
        </TouchableOpacity>
        </View>
      <View style={{ marginTop: 8, flex: 1 }}>
        <FiltrerListBooks />
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  filterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8, 
  },
});;
