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

const Carousel = () => {
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
    }, 5000);

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
        "You're about to take steps towards understanding your kidney health.The following questions will help us determine whether you might be at risk for Chronic Kidney Disease (CKD).",
    },
    {
      id: "02",
      image: require("../assets/images/3dman.png"),
      caption:
        "Your honest answers will provide valuable insights. We prioririze your well-being.",
    },
    {
      id: "03",
      image: require("../assets/images/3dman.png"),
      caption:
        "You can exit the assessment at any time. And if you have urgent medical concerns, please contact your doctor immediately.",
    },
    {
      id: "04",
      image: require("../assets/images/3dman.png"),
      caption:
        "Remember, this assessment does not replace medical consultation. Your privacy is respected; all information you provide will be kept confidential.",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: screenWidth,
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Image source={item.image} style={{ height: 280, width: 210 }} />
        <Text
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 16,
            fontFamily: "OpenSans-Medium",
            color: "#333366",
            marginTop: "5%",
            width: "80%",
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
          marginTop: 30,
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Carousel;
