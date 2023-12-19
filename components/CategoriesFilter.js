import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { categories, colors } from "../constants/Constant";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import { color } from "react-native-tailwindcss";

const CategoriesFilter = () => {
	const navigation = useNavigation();


  const handleCategoryPress = (category) => {
    navigation.navigate("Details")
    setSelectedCategory(category);
  };
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryPress(category.category)}
              style={{
                backgroundColor: colors.COLOR_PRIMARY,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
              }}
            >
              <Text
                style={{
                  color: index === 0 && colors.COLOR_DARK,
                  fontSize: 18,
                }}
              >
                {category.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		  flexDirection: 'row',
		  paddingVertical: 16,
		},
    button: {
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 5,
    },
    buttonPressed: {
      backgroundColor: 'red',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
	  });
	  
export default CategoriesFilter;
