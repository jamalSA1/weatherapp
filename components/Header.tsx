import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Weather } from "@/types/weather";
import WeatherConditions from "./WeatherConditions";

type HeaderProps = {
  weather: Weather;
};

const Header: React.FC<HeaderProps> = ({weather}) => {

  const name = weather?.city.name || "الموقع غير معروف";
const temp = weather?.list[0].main?.temp || 0;
const temp_min = weather?.list[0].main?.temp_min || 0;
const temp_max = weather?.list[0].main?.temp_max || 0;
const humidity = weather?.list[0].main?.humidity || 0;
const pressure = weather?.list[0].main?.pressure || 0;
const clouds = weather?.list[0].clouds?.all || 0;



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
        <View style={styles.weatherAdverbs}>
          <Text style={styles.weatherAdverb}>
            <WeatherConditions temp={temp} cloud={clouds} humidity={humidity} pressure={pressure} />
          </Text>
        </View>
        <View />
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
    height: "100%",
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
    color: "#525CEB"
  },
  max: {
    color: "#FC4100"
  },
  weatherAdverbs: {
    width: "70%",
    alignItems: "flex-end",
    textAlign: "left",
    marginRight: 20,
    marginLeft: 5
  },
  weatherAdverb: {
    textAlign: "center",
    fontSize: 20,
    color: "#222831",
    marginTop: 25
  }
});

export default Header;
