import { View, Text, TouchableOpacity, Linking } from "react-native";
import React, { useState, useEffect } from "react";
import * as Progress from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

export default function AutomaticMode() {
  const [isConnectedMLP, setIsConnectedMLP] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [waterdata, setWaterdata] = useState(null);
  const [showLink, setShowLink] = useState(false);
  const { fontScale } = useWindowDimensions();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowLink(true);
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  async function fetchData() {
    const result = await API.getData();
    setData(result);
    setIsLoading(false);
  }

  const handleLinkPress = () => {
    Linking.openURL("https://ckdrealtimedata.streamlit.app/");
  };

  return (
    <View>
      <View
        style={{
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10%",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-SemiBold",
            fontSize: 14 / fontScale,
            color: "#222244",
            textAlign: "center",
          }}
        >
          {isConnectedMLP ? "Connected" : "Connecting"} with KidniPure-001
        </Text>
      </View>

      <View
        style={{
          marginTop: "10%",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <>
            <Progress.Circle size={150} indeterminate={true} />
          </>
        ) : (
          <>
            <Ionicons name="cloud-done" size={120} color="#5960ff" />
          </>
        )}

        <Text
          style={{
            textAlign: "center",
            fontFamily: "OpenSans-Medium",
            fontSize: 14 / fontScale,
            color: "#222244",
            marginTop: "5%",
            flexWrap: "wrap",
          }}
        >
          {isLoading ? "Please Wait..." : "Fetched successfully!"}
        </Text>
      </View>

      {showLink && (
        <View
          style={{
            marginTop: "10%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TouchableOpacity onPress={handleLinkPress}>
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                fontSize: 16 / fontScale,
                color: "#008000",
                textTransform: "uppercase",
              }}
            >
              Click Here to Open the Link
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
