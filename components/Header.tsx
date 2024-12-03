import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import WeatherImg from "./WeatherImg";
import { useFonts } from "expo-font";
import { Weather } from "@/types/weather";

type HeaderProps = {
  weather: Weather;
};

const Header: React.FC<HeaderProps> = ({weather}) => {

  const name = weather?.city.name || "الموقع غير معروف";
const description = weather?.list[0].weather[0] || "غير متوفر";
const temp = weather?.list[0].main?.temp || 0;
const temp_min = weather?.list[0].main?.temp_min || 0;
const temp_max = weather?.list[0].main?.temp_max || 0;


  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.temp1}>
          <View>
            <Text style={styles.temp}>
              {temp.toFixed(0)}
            </Text>
            <Text style={styles.name}>
              {name}
            </Text>
          </View>

          <View style={styles.tempMaxMin}>
            <Text style={[styles.degree, styles.min]}>
              {temp_min.toFixed(0)}
            </Text>
            <View
              style={{ width: 1, height: 20, backgroundColor: "#A6AEBF" }}
            />
            <Text style={[styles.degree, styles.max]}>
              {temp_max.toFixed(0)}
            </Text>
          </View>
        </View>
        <View>
          <Text>
            {description.description}
          </Text>
        </View>
        <View />
        {/* <View>
          {main === "Clear"
            ? <WeatherImg source={require("../assets/images/sun.png")} />
            : main === "Clouds"
              ? <WeatherImg source={require("../assets/images/cloud.png")} />
              : main === "Rain"
                ? <WeatherImg source={require("../assets/images/rain.png")} />
                : "غير معروف"}
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10
  },
  temp1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  temp: {
    fontSize: 70,
    height: 70,
    fontWeight: "light",
    color: "#222831",
    marginBottom: 0
  },
  name: {
    fontSize: 15,
    color: "#686D76",
    textAlign: "center"
  },
  tempMaxMin: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  degree: {
    fontSize: 12,
    paddingVertical: 5
  },
  min: {
    color: "#0D92F4"
  },
  max: {
    color: "#FF7F3E"
  }
});

export default Header;
