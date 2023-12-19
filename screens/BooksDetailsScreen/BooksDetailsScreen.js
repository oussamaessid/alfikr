import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import OptionsDetailsBooks from "../../components/OptionsDetailsBooks";


const BooksDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  console.log(item);
  return (
    <View style={{ backgroundColor: "#ECB43A", flex: 1 }}>
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>

        <FontAwesome name={"heart-o"} size={28} color="white" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 140,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
            // marginBottom: 130,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>

        {/* Recipe Name */}
        <Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Recipe Description */}
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              Auteur: {item.auteur}
            </Text>
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              ISBN: {item.iSBN}
            </Text>
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              Date de publication: {item.datePublication}
            </Text>
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              Description: {item.description}
            </Text>
            {/* Recipe Ingredients  */}

            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
              >
                langue:
              </Text>

              {item.langue.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 4,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: "#ECB43A",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>
            {/*  Details */}
            <OptionsDetailsBooks />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default BooksDetailsScreen;

const styles = StyleSheet.create({});
