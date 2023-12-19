import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const FirstLaunchCheck = ({ }) => {
    const nav = useNavigation();
  useEffect(() => {
    // Check if it's the first launch by using AsyncStorage
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('alreadyLaunched');
        if (value === null) {
          // If it's the first launch, navigate to the onboarding screen
          nav.replace('OnboardingScreen');
          AsyncStorage.setItem('alreadyLaunched', 'true');
        } else {
          // If not the first launch, navigate to the main app screen
          nav.replace('Home');
        }
      } catch (error) {
        console.error('Error accessing AsyncStorage:', error);
        // Handle errors here
      }
    };

    checkFirstLaunch();
  }, [nav]);

  return <View />;
};

export default FirstLaunchCheck;
