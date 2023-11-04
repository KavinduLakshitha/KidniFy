import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

const InitialCarousel = () => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      let nextIndex = (activeIndex + 1) % carouselData.length;

      flatlistRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setActiveIndex(nextIndex);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const carouselData = [
    {
      id: "01",
      image: require("../assets/images/3dman.png"),
      caption:
        "Predict your CKD status: Are you at risk for kidney disease? Find out with our quick and easy assessment.",
    },
    {
      id: "02",
      image: require("../assets/images/3dman.png"),
      caption:
        "Let's create a diet plan for you CKD patients: We can help you create a personalized diet plan to manage your CKD.",
    },
    {
      id: "03",
      image: require("../assets/images/3dman.png"),
      caption:
        "Get visual insights for your CKD medical images: See your medical images in a new way with our AI-powered analysis.",
    },
    {
      id: "04",
      image: require("../assets/images/3dman.png"),
      caption:
        "Test water quality that you drink using IoT: Ensure your drinking water is safe and healthy with our IoT-based water quality testing system.",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: screenWidth,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        {/* <Image
          source={item.image}
          style={{ height: 280, width: 210, marginTop: 50 }}
        /> */}
        <Text
          style={{
            textAlign: "left",
            fontSize: 18,
            fontFamily: "OpenSans-SemiBold",
            color: "#333366",
            width: "85%",
          }}
        >
          {item.caption}
        </Text>
      </View>
    );
  };

  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / screenWidth);
    setActiveIndex(newIndex);
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={dot.id}
            style={{
              backgroundColor: "#47aeff",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#47aeff80",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      }
    });
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 30,
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default InitialCarousel;
