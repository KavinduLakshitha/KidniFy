import { View, Text, TextInput } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";

const FormInput = (props) => {
  const { fontScale } = useWindowDimensions();

  const { label, autoCapitalize, secureTextEntry, autoComplete, keyboardType } =
    props;

  return (
    <View>
      <Text
        style={{
          fontFamily: "OpenSans-SemiBold",
          fontSize: 15 / fontScale,
          color: "#222244",
          textTransform: "capitalize",
        }}
      >
        {label}
      </Text>
      <TextInput
        {...props}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        autoComplete={autoComplete}
        style={{
          fontFamily: "OpenSans-Regular",
          fontSize: 15 / fontScale,
          borderWidth: 1,
          borderColor: "#333366",
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 100,
          marginVertical: "2.5%",
        }}
      />
    </View>
  );
};

export default FormInput;
