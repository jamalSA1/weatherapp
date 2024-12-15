import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Weather } from "@/types/weather";
import WeatherImg from "./WeatherImg";

type WeatherInfoProps = {
  weather: Weather;
  lastUpdated: string | null;
  isDayTime: boolean;
};

const WeatherInfo = ({ weather, lastUpdated, isDayTime }: WeatherInfoProps) => {
  const main = weather.list[0].weather[0].main;

  const getWeatherAssets = (main: string) => {
    switch (main) {
      case "Clear":
        return {
          image: require("../assets/weatherIcon/Sun.png"),
          animation: require("../assets/images/bunny.png")
        };
      case "Clouds":
        return {
          image: require("../assets/weatherIcon/Sun-cloud.png"),
          animation: require("../assets/images/sun.png")
        };
      case "Thunderstorm":
        return {
          image: require("../assets/images/thunderstorm.png"),
          animation: require("../assets/images/sun.png")
        };
      case "Drizzle":
        return {
          image: require("../assets/images/drizzle.png"),
          animation: require("../assets/images/sun.png")
        };
      case "Snow":
        return {
          image: require("../assets/images/snow.png"),
          animation: require("../assets/images/sun.png")
        };
      case "Rain":
        return {
          image: require("../assets/images/rain.png"),
          animation: require("../assets/images/sun.png")
        };
      default:
        return { image: null, animation: null };
    }
  };

  const { image, animation } = getWeatherAssets(main);

  return (
    <View style={{ marginTop: 70, alignItems: "center" }}>
      <View>
        <WeatherImg source={image} />
      </View>
      <View style={styles.descriptionWrapper}>
        <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <Text style={{ color: "gray" }}>في منطقتك</Text>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>
            {weather.list[0].weather[0].description}
          </Text>
        </View>
        <Image
          source={require("../assets/images/location.png")}
          style={{ width: 20, height: 20 }}
        />
      </View>
      {lastUpdated &&
        <Text style={{ color: "#A6AEBF", fontSize: 12.5 }}>
          آخر تحديث: {lastUpdated}
        </Text>}

      <Image source={animation} style={{ width: 400, height: 400 }} />
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  descriptionWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15
  }
});
