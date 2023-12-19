import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { View, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = () => {
  const nav = useNavigation();

  const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "#fff" : "#808080";
    return (
      <View
        style={{
          height: 5,
          width: 5,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };

  const Done = ({ ...props }) => (
    <TouchableOpacity
      style={{
        marginRight: 12,
      }}
      {...props}
    >
      <Text style={{ color: "#fff" }}>Done</Text>
    </TouchableOpacity>
  );

  const handleSkip = () => {
    nav.replace('Main'); // Replace 'Main' with your desired screen name
  };

  const SkipButton = ({ ...props }) => (
    <TouchableOpacity onPress={handleSkip}>
      <Text style={{ color: "#fff", fontSize: 16,marginLeft: 20 }}>Skip</Text>
    </TouchableOpacity>
  );
  const NextButton = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text style={{ color: "#fff", fontSize: 16, marginRight: 20 }}>Next</Text>
    </TouchableOpacity>
  );
  return (
    <Onboarding
      onSkip={() => nav.replace("Main")}
      onDone={() => nav.navigate("Main")}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      bottomBarColor="#ECB43A"
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      pages={[
        {
          backgroundColor: "#ECB43A",
          image: <Image source={require("../../assets/onboarding_1.png")} />,
          title:<Text style={{ color: '#fff',fontSize: 24,justifyContent: "center",textAlign:"center"}}> Find Blood Donors </Text>,
          subtitle:
          <Text style={{ color: '#fff',fontSize: 18,justifyContent: "center",marginHorizontal: 20,textAlign:"center" }}> Lorem ipsum dollor Lorem ipsum dollor  Lorem ipsum dollor  Lorem ipsum dollor  </Text>,
        },
        {
          backgroundColor: "#ECB43A",
          image: <Image source={require("../../assets/onboarding_2.png")} />,
          title:<Text style={{ color: '#fff',fontSize: 24,justifyContent: "center",textAlign:"center" }}> Post a Blood Request </Text>,
          subtitle:
          <Text style={{ color: '#fff',fontSize: 18,justifyContent: "center",marginHorizontal: 20,textAlign:"center"  }}> Lorem ipsum dollor Lorem ipsum dollor  Lorem ipsum dollor  Lorem ipsum dollor  </Text>,
        },
        {
          backgroundColor: "#ECB43A",
          image: <Image source={require("../../assets/onboarding_2.png")} />,
          title: <Text style={{ color: '#fff',fontSize: 24,justifyContent: "center",textAlign:"center" }}>Post a Blood Request </Text>,
          subtitle:
          <Text style={{ color: '#fff',fontSize: 18,justifyContent: "center",marginHorizontal: 20  }}>Lorem ipsum dollor Lorem ipsum dollor  Lorem ipsum dollor  Lorem ipsum dollor </Text>,
        },
      ]}
    />
  );
};
export default OnboardingScreen;
