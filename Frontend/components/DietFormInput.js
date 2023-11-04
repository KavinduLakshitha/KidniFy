import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { onChange } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";

export default function DietFormInput(props) {
  const { label, unit, value, onChange } = props;
  const { fontScale } = useWindowDimensions();

  return (
    <View
      style={{
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2.5%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            fontSize: 14 / fontScale,
            color: "#222244",
            flex: 1,
          }}
        >
          {label}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1.2,
            borderWidth: 1,
            borderRadius: 45,
            paddingHorizontal: 10,
          }}
        >
          <TextInput
            value={value}
            onChange={onChange}
            keyboardType="numeric"
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 15 / fontScale,
              borderWidth: 1,
              borderColor: "#333366",
              width: 90,
              paddingVertical: 2.5,
              paddingHorizontal: 15,
              borderRightWidth: 0.75,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
            }}
          />
          {/* <FormInput secureTextEntry={false} /> */}
          <View
            style={{
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 13 / fontScale,
                color: "#222244",
                textAlign: "center",
              }}
            >
              {unit}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
