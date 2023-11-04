import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";

export default function HelloMessage() {
  const [rotationValue] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const { fontScale, heightScale } = useWindowDimensions();

  const rotateIcon = () => {
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("Settings");
      rotationValue.setValue(0);
    });
  };

  const interpolatedRotateAnimation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "150deg"],
  });

  return (
    <View>
      <Image
        source={require("../assets/images/Wave.png")}
        style={{
          height: 320,
          width: "100%",
          position: "absolute",
          top: 0,
          // left: 0,
          // right: 0,
        }}
      />
      <TouchableOpacity
        onPress={rotateIcon}
        style={{
          marginLeft: "auto",
          alignItems: "flex-end",
          marginRight: "7.5%",
          paddingTop: "15%",
        }}
      >
        <Animated.View
          style={{ transform: [{ rotate: interpolatedRotateAnimation }] }}
        >
          <Ionicons name="ios-settings-outline" size={24} color="#222244" />
        </Animated.View>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "Lora-Bold",
          fontSize: 20 / fontScale,
          color: "#222244",
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        Hi, We can help you to diagnose your kidney health, and more...
      </Text>
    </View>
  );
}
