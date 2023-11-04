// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Image,
//   View,
//   Platform,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import ButtonFilled from "./ButtonFilled";
// import * as Progress from "react-native-progress";
// import { AntDesign } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { useWindowDimensions } from "react-native";
// import axios from "axios";

// const BACKEND_URL = "http://172.31.187.94:5002";

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const navigation = useNavigation();
//   const [showGif, setShowGif] = useState(false);
//   const [scanningComplete, setScanningComplete] = useState(false);
//   const [scanning, setScanning] = useState(false);
//   const { fontScale } = useWindowDimensions();

//   imagePreviewHeight = 280 / fontScale;

//   // const pickImage = async () => {
//   //   let result = await ImagePicker.launchImageLibraryAsync({
//   //     mediaTypes: ImagePicker.MediaTypeOptions.All,
//   //     aspect: [4, 3],
//   //     quality: 1,
//   //   });

//   //   if (!result.canceled) {
//   //     setUploading(true);

//   //     const formData = new FormData();
//   //     formData.append("image", result.assets[0]);

//   //     const response = await fetch(`${BACKEND_URL}/predict`, {
//   //       method: "POST",
//   //       body: formData,
//   //     });

//   //     const json = await response.json();
//   //     setResults(json);

//   //     setTimeout(() => {
//   //       setImage(result.assets[0].uri);
//   //       setUploading(false);
//   //     }, 3000);
//   //   }
//   // };

//   // const pickImage = async () => {
//   //   let result = await ImagePicker.launchImageLibraryAsync({
//   //     mediaTypes: ImagePicker.MediaTypeOptions.All,
//   //     aspect: [4, 3],
//   //     quality: 1,
//   //   });

//   //   if (!result.canceled) {
//   //     setUploading(true);

//   //     const formData = new FormData();
//   //     formData.append("image", {
//   //       uri: result.assets[0].uri,
//   //       type: "image/jpeg", // Adjust the type if necessary
//   //       name: "image.jpg",
//   //     });

//   //     try {
//   //       const response = await axios.post(`${BACKEND_URL}/predict`, formData, {
//   //         headers: {
//   //           "Content-Type": "multipart/form-data",
//   //         },
//   //       });

//   //       const json = response.data;
//   //       setResults(json);

//   //       setTimeout(() => {
//   //         setImage(result.assets[0].uri);
//   //         setUploading(false);
//   //       }, 3000);
//   //     } catch (error) {
//   //       console.error("Error uploading image:", error);
//   //       setUploading(false);
//   //     }
//   //   }
//   // };

//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         aspect: [4, 3],
//         quality: 1,
//       });

//       if (!result.canceled) {
//         setUploading(true);

//         const formData = new FormData();
//         formData.append("image", {
//           uri: result.assets[0].uri,
//           type: "image/jpeg", // Adjust the type if necessary
//           name: "image.jpg",
//         });

//         try {
//           const response = await axios.post(
//             `${BACKEND_URL}/predict`,
//             formData,
//             {
//               headers: {
//                 "Content-Type": "multipart/form-data",
//               },
//             }
//           );

//           const json = response.data;
//           // Handle the response as needed
//           console.log(json);

//           setImage(result.assets[0].uri);
//         } catch (error) {
//           console.error("Error uploading image:", error);
//         } finally {
//           setUploading(false);
//         }
//       }
//     } catch (error) {
//       console.error("Image picker error:", error);
//     }
//   };

//   const startScanning = () => {
//     setShowGif(true);
//     setScanning(true);

//     setTimeout(() => {
//       setShowGif(false);
//       setScanning(false);
//       setScanningComplete(true);
//     }, 10000);
//   };

//   const handleScanButtonPress = () => {
//     setShowGif(true);

//     setTimeout(() => {
//       setShowGif(false);
//       setScanningComplete(true);
//     }, 3000);
//   };

//   const renderImageUploadUI = () => {
//     if (uploading) {
//       return (
//         <View
//           style={{
//             alignItems: "center",
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               marginTop: 20,
//               fontSize: 20 / fontScale,
//               color: "#5960ff",
//               fontFamily: "Lora-Bold",
//             }}
//           >
//             Uploading...
//           </Text>
//           <Text
//             style={{
//               textAlign: "center",
//               fontSize: 14 / fontScale,
//               marginTop: 20,
//               width: "80%",
//               marginLeft: "auto",
//               marginRight: "auto",
//               lineHeight: 22,
//               fontFamily: "OpenSans-Medium",
//               color: "#003366",
//               marginBottom: 20,
//             }}
//           >
//             We are uploading your image, please wait a moment.
//           </Text>

//           <Progress.Circle
//             size={60}
//             indeterminate={true}
//             showsText={true}
//             borderWidth={4}
//           />
//         </View>
//       );
//     } else if (showGif && scanning) {
//       return (
//         <View
//           style={{
//             marginTop: 20,
//           }}
//         >
//           <Image
//             source={require("../assets/images/Scanning.gif")}
//             style={{
//               width: "100%",
//               height: imagePreviewHeight,
//               position: "absolute",
//               marginTop: -295 / fontScale,
//               zIndex: 10,
//               overflow: "hidden",
//             }}
//           />
//           <Text
//             style={{
//               textAlign: "center",
//               fontSize: 20 / fontScale,
//               color: "#5960ff",
//               fontFamily: "Lora-Bold",
//               marginTop: 20,
//             }}
//           >
//             Scanning...
//           </Text>
//           <Text
//             style={{
//               textAlign: "center",
//               fontSize: 14 / fontScale,
//               marginTop: 20,
//               width: "80%",
//               marginLeft: "auto",
//               marginRight: "auto",
//               lineHeight: 22,
//               fontFamily: "OpenSans-Medium",
//               color: "#003366",
//               marginBottom: 20,
//             }}
//           >
//             We are scanning your image, please wait a moment.
//           </Text>
//         </View>
//       );
//     } else if (scanningComplete) {
//       return (
//         <View>
//           <View
//             style={{
//               marginTop: 20,
//             }}
//           >
//             <Text
//               style={{
//                 textAlign: "center",
//                 fontSize: 20 / fontScale,
//                 color: "#5960ff",
//                 fontFamily: "Lora-Bold",
//               }}
//             >
//               Scanning Complete
//             </Text>
//             <View style={{ marginTop: 20 }}>
//               <ButtonFilled
//                 title="Show Results"
//                 onPress={() => navigation.navigate("ScanResults")}
//               />
//             </View>
//           </View>
//         </View>
//       );
//     } else if (image && !scanning) {
//       return (
//         <View
//           style={{
//             marginTop: 20,
//           }}
//         >
//           <ButtonFilled title="Scan" onPress={startScanning} />
//         </View>
//       );
//     } else {
//       return (
//         <View>
//           <View>
//             {/* <Text
//               style={{
//                 textAlign: "center",
//                 marginTop: 20,
//                 fontSize: 20 / fontScale,
//                 color: "#5960ff",
//                 fontFamily: "Lora-Bold",
//               }}
//             >
//               Upload Your Image
//             </Text> */}
//             <Text
//               style={{
//                 textAlign: "center",
//                 fontSize: 14 / fontScale,
//                 marginTop: 20,
//                 width: "80%",
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 lineHeight: 22,
//                 fontFamily: "OpenSans-Medium",
//                 color: "#003366",
//               }}
//             >
//               Browse and choose the image you want to upload
//             </Text>
//             <Text
//               style={{
//                 textAlign: "center",
//                 fontSize: 14 / fontScale,
//                 marginTop: 20,
//                 width: "80%",
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 lineHeight: 20,
//                 fontFamily: "OpenSans-Medium",
//                 color: "#66a3ff",
//               }}
//             >
//               Max file size: 5MB
//             </Text>
//           </View>
//           <View
//             style={{
//               marginTop: 20,
//             }}
//           >
//             <TouchableOpacity
//               style={{
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 backgroundColor: "#5960ff",
//                 borderRadius: 50,
//                 padding: 15,
//                 shadowColor: "#000",
//                 shadowOffset: {
//                   width: 0,
//                   height: 1,
//                 },
//                 shadowOpacity: 0.22,
//                 shadowRadius: 2.22,
//                 elevation: 3,
//                 overflow: "hidden",
//               }}
//               onPress={pickImage}
//             >
//               <AntDesign name="plus" size={30} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       );
//     }
//   };

//   return (
//     <View
//       style={{
//         height: "100%",
//         justifyContent: "space-between",
//       }}
//     >
//       <View style={{}}>
//         <View
//           style={{
//             width: "100%",
//             height: imagePreviewHeight,
//             borderRadius: 10,
//             overflow: "hidden",
//             borderColor: "#c2c4ff",
//             borderWidth: 3,
//             borderStyle: "dashed",
//           }}
//         >
//           {image && (
//             <Image
//               source={{ uri: image }}
//               style={{
//                 width: "100%",
//                 height: imagePreviewHeight,
//                 objectFit: "contain",
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 borderRadius: 10,
//               }}
//             />
//           )}
//         </View>

//         {renderImageUploadUI()}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ButtonFilled from "./ButtonFilled";
import * as Progress from "react-native-progress";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigation = useNavigation();
  const [showGif, setShowGif] = useState(false);
  const [scanningComplete, setScanningComplete] = useState(false);
  const [scanning, setScanning] = useState(false);
  const { fontScale } = useWindowDimensions();

  imagePreviewHeight = 280 / fontScale;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUploading(true);

      setTimeout(() => {
        setImage(result.assets[0].uri);
        setUploading(false);
      }, 1800000);
    }
  };

  const startScanning = () => {
    setShowGif(true);
    setScanning(true);

    setTimeout(() => {
      setShowGif(false);
      setScanning(false);
      setScanningComplete(true);
    }, 10000);
  };

  const handleScanButtonPress = () => {
    setShowGif(true);

    setTimeout(() => {
      setShowGif(false);
      setScanningComplete(true);
    }, 3000);
  };

  const renderImageUploadUI = () => {
    if (uploading) {
      return (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontSize: 20 / fontScale,
              color: "#5960ff",
              fontFamily: "Lora-Bold",
            }}
          >
            Uploading...
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14 / fontScale,
              marginTop: 20,
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 22,
              fontFamily: "OpenSans-Medium",
              color: "#003366",
              marginBottom: 20,
            }}
          >
            We are uploading your image, please wait a moment.
          </Text>

          <Progress.Circle
            size={60}
            indeterminate={true}
            showsText={true}
            borderWidth={4}
          />
        </View>
      );
    } else if (showGif && scanning) {
      return (
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Image
            source={require("../assets/images/Scanning.gif")}
            style={{
              width: "100%",
              height: imagePreviewHeight,
              position: "absolute",
              marginTop: -295 / fontScale,
              zIndex: 10,
              overflow: "hidden",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 20 / fontScale,
              color: "#5960ff",
              fontFamily: "Lora-Bold",
              marginTop: 20,
            }}
          >
            Scanning...
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14 / fontScale,
              marginTop: 20,
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 22,
              fontFamily: "OpenSans-Medium",
              color: "#003366",
              marginBottom: 20,
            }}
          >
            We are scanning your image, please wait a moment.
          </Text>
        </View>
      );
    } else if (scanningComplete) {
      return (
        <View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20 / fontScale,
                color: "#5960ff",
                fontFamily: "Lora-Bold",
              }}
            >
              Scanning Complete
            </Text>
            <View style={{ marginTop: 20 }}>
              <ButtonFilled
                title="Show Results"
                onPress={() => navigation.navigate("ScanResults")}
              />
            </View>
          </View>
        </View>
      );
    } else if (image && !scanning) {
      return (
        <View
          style={{
            marginTop: 20,
          }}
        >
          <ButtonFilled title="Scan" onPress={startScanning} />
        </View>
      );
    } else {
      return (
        <View>
          <View>
            {/* <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                fontSize: 20 / fontScale,
                color: "#5960ff",
                fontFamily: "Lora-Bold",
              }}
            >
              Upload Your Image
            </Text> */}
            <Text
              style={{
                textAlign: "center",
                fontSize: 14 / fontScale,
                marginTop: 20,
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 22,
                fontFamily: "OpenSans-Medium",
                color: "#003366",
              }}
            >
              Browse and choose the image you want to upload
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14 / fontScale,
                marginTop: 20,
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 20,
                fontFamily: "OpenSans-Medium",
                color: "#66a3ff",
              }}
            >
              Max file size: 5MB
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#5960ff",
                borderRadius: 50,
                padding: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
                overflow: "hidden",
              }}
              onPress={pickImage}
            >
              <AntDesign name="plus" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={{}}>
        <View
          style={{
            width: "100%",
            height: imagePreviewHeight,
            borderRadius: 10,
            overflow: "hidden",
            borderColor: "#c2c4ff",
            borderWidth: 3,
            borderStyle: "dashed",
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                height: imagePreviewHeight,
                objectFit: "contain",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 10,
              }}
            />
          )}
        </View>

        {renderImageUploadUI()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
