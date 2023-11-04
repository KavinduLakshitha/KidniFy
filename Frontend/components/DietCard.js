import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";

export default function DietCard({ category, items }) {
  const { fontScale } = useWindowDimensions();

  const renderItems = () => {
    return items.map((item, index) => {
      if (item) {
        return (
          <Text
            key={index}
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 13 / fontScale,
              color: "#222244",
              textTransform: "capitalize",
              textAlign: "center",
              paddingVertical: 7,
              borderBottomColor: "#33336680",
              borderBottomWidth: 0.5,
              paddingHorizontal: 10,
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {item}
          </Text>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <View
      style={{
        borderWidth: 0.2,
        borderColor: "#33336680",
        shadowColor: "#333366",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "#f0f9ff",
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "OpenSans-SemiBold",
          fontSize: 15 / fontScale,
          color: "#222244",
          textTransform: "capitalize",
          textAlign: "center",
          backgroundColor: "#d5e6ff",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingVertical: 7,
          borderBottomColor: "#33336680",
          borderBottomWidth: 0.5,
        }}
      >
        {category}
      </Text>
      <ScrollView>{renderItems()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
