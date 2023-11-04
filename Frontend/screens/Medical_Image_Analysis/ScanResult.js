import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ScanResult() {
  return (
    <View
      style={{
        backgroundColor: "#f0f9ff",
        flex: 1,
      }}
    >
      <View
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            marginTop: "5%",
            fontFamily: "OpenSans-SemiBold",
            color: "#ff0000",
          }}
        >
          You have been detected with signs of CKD in your image.
        </Text>
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
            marginTop: "5%",
            padding: "5%",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "OpenSans-SemiBold",
              marginBottom: "5%",
            }}
          >
            Possible Findings
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              Small and shrunken kidneys
            </Text>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              Cysts in the kidneys
            </Text>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              Scarring of the kidneys
            </Text>
          </View>
        </View>

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
            marginTop: "5%",
            padding: "5%",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "OpenSans-SemiBold",
              marginBottom: "5%",
            }}
          >
            Recommendations
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              See a doctor for further evaluation
            </Text>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              Follow up with your doctor to discuss your treatment plan
            </Text>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              Make lifestyle changes, such as eating a healthy diet, exercising
              regularly, and quitting smoking
            </Text>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              Take your medications as prescribed. This is important for
              controlling your blood pressure, blood sugar, and cholesterol
              levels.
            </Text>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              Get regular checkups. This will help your doctor monitor your
              kidney function and other health conditions.
            </Text>
            <Text
              style={{
                fontSize: 16.5,
                marginBottom: 5,
                fontFamily: "OpenSans-Medium",
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: "#33336680",
                borderBottomWidth: 0.5,
              }}
            >
              Be aware of the signs and symptoms of kidney failure. These
              include fatigue, shortness of breath, swelling in the legs and
              feet, decreased urine output, and changes in mental status.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
