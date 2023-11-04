import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ImagePickerExample from "../../components/ImagePicker";
import { useWindowDimensions } from "react-native";

export default function ImageUploadScreen() {
  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();

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
            marginTop: 10,
          }}
        >
          <ImagePickerExample />
        </View>
      </View>
    </View>
  );
}
