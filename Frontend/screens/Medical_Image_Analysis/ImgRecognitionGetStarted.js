import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ImgRecoginitionGetStarted() {
  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();

  const scanningImageHeight = 224 / fontScale;
  const scanningImageWidth = 240 / fontScale;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#f0f9ff",
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "7.5%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: "auto",
            }}
            onPress={() => navigation.navigate("MainScreen")}
          ></TouchableOpacity>
        </View>
        <View
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Image
            source={require("../../assets/images/KidneyAnim.gif")}
            style={{
              height: scanningImageHeight,
              width: scanningImageWidth,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5%",
            }}
          />
          <Text
            style={{
              fontSize: 20 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
              marginTop: "5%",
              textAlign: "center",
            }}
          >
            A Closer Look at Your Kidney
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Medium",
              fontSize: 15 / fontScale,
              color: "#222244",
              marginTop: "5%",
              textAlign: "center",
              lineHeight: 28,
            }}
          >
            Upload a clear CT scan of your kidneys. Our AI will analyze it to
            detect chronic kidney disease. You'll get a quick result - CKD
            detected or not.
          </Text>
        </View>
      </View>

      <View
        style={{
          marginBottom: "7.5%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "85%",
        }}
      >
        <ButtonFilled
          title="Get Started"
          onPress={() => navigation.navigate("ImgUploadScreen")}
        />
      </View>
    </View>
  );
}
