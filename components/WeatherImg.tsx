import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

const WeatherImg = ({ source }: { source: ImageSourcePropType }) => {
  return (
    <View>
      <Image source={source} style={{ width: 50, height: 50 }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherImg;
