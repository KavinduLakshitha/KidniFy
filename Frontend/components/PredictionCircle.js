import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, G, Text as SvgText } from "react-native-svg";

const PredictionCircle = ({ radius, strokeWidth, percentage }) => {
  const [rotation, setRotation] = useState(0);

  const [isRotationStopped, setIsRotationStopped] = useState(false);

  useEffect(() => {
    if (isRotationStopped) return; // If rotation is stopped, do nothing

    const interval = setInterval(() => {
      if (rotation >= percentage * 3.6) {
        clearInterval(interval); // Stop rotation when reaching the desired percentage
        setIsRotationStopped(true); // Set rotation stopped flag
      } else {
        setRotation((rotation) => (rotation + 5) % 360); // Increase rotation speed
      }
    }, 10);

    return () => clearInterval(interval);
  }, [percentage, rotation, isRotationStopped]);

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="lightblue"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#1e86d9"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${radius * Math.PI * 2 * (rotation / 360)} ${
            radius * Math.PI * 2
          }`}
          strokeDashoffset={0}
          strokeLinecap="round"
        />
        <G transform={{ translate: `${radius} ${radius}` }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              color: "#1e86d9",
              marginTop: "40%",
            }}
          >
            {rotation >= percentage * 3.6 ? `${Math.floor(percentage)}%` : ""}
          </Text>
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PredictionCircle;
