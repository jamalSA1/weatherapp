import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

const WeatherImg = ({ source }: { source: ImageSourcePropType }) => {
  return (
    <View>
      <Image source={source} style={{ width: 90, height: 90 }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherImg;
