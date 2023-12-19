import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import OnboardingScreen from "./screens/OnboardingScreen/OnboardingScreen";
import { StyleSheet } from "react-native";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import DetailsScreen from "./screens/DetailsScreen/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import BooksDetailsScreen from "./screens/BooksDetailsScreen/BooksDetailsScreen";

export default function App() {
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          animation: "fade",
          headerShown: false,
        }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="BooksDetailsScreen" component={BooksDetailsScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  function Main() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Details") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          animation: "fade",
          headerShown: false,
          tabBarActiveTintColor: "#ECB43A",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
