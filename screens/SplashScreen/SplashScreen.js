import React from "react";
import { View, Image } from "react-native";
import splashImg from "../../assets/onboarding_1.png";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
const SplashScreen = () => {

  const nav = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to another screen after 3 seconds (adjust time as needed)
      nav.replace('OnboardingScreen'); // Replace 'Home' with your screen name
    }, 3000); // Change this time as per your requirement

    return () => clearTimeout(timeout); // Clear timeout on unmount to prevent memory leaks
  }, [nav]);

    return (
      <View style={style.splash}>
        <Image source={splashImg} />
      </View>
    );
};

const style = StyleSheet.create({
  splash: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: '#ECB43A',
    },
});

export default SplashScreen;