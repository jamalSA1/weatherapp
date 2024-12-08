import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

type WeatherConditionsProps = {
  temp: number;
  cloud: number;
  humidity: number;
  pressure: number;
};

const WeatherConditions = ({
  temp,
  cloud,
  humidity,
  pressure
}: WeatherConditionsProps) => {
  // humidity رطوبه
  // pressure ضغط الجو
  return (
    <View>
      <View>
        <View style={styles.notices}>
          <View style={styles.clouds}>
            <Text style={styles.cloudNumber}>الغيوم: {cloud}</Text>
          </View>
          <View>
            {temp < 30 ? (
              <>
                <Text style={styles.itsGoodWeather}>جيد جدا</Text>
              </>
            ) : (
              <>
                <Text style={styles.GoodWeather}>حار قليلا</Text>
              </>
            )}
          </View>
        </View>
      </View>
      <View>
        {temp < 30 ? (
          <Text style={[styles.weatherNews, { backgroundColor: "#E72929" }]}>
            تحذير من موجة حر
          </Text>
        ) : (
          temp <= 10 && (
            <Text style={[styles.weatherNews, { backgroundColor: "#4379F2" }]}>
              تحذير من موجة برد
            </Text>
          )
        )}

        {humidity > 100 && pressure >= 1000 && (
          <Text style={[styles.weatherNews, { backgroundColor: "#227B94" }]}>
            توقعات امطار
          </Text>
        )}
      </View>
    </View>
  );
};

export default WeatherConditions;

const styles = StyleSheet.create({
  adverbs: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  clouds: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#0D92F4",
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 2
  },
  cloudNumber: {
    color: "#0D92F4",
    fontSize: 14,
    textAlign: "right"
  },
  itsGoodWeather: {
    color: "#FF9D3D",
    borderWidth: 1,
    borderColor: "#FF9D3D",
    fontSize: 14,
    textAlign: "right",
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 2
  },
  GoodWeather: {
    color: "#54C392",
    borderWidth: 1,
    borderColor: "#54C392",
    fontSize: 14,
    textAlign: "right",
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 2
  },
  notices: {
    display: "flex",
    flexDirection: "row",
    gap: 10
  },
  weatherNews: {
    padding: 6,
    marginTop: 10,
    borderRadius: 50,
    color: "white",
    textAlign: "center",
    width: "83%",
    alignSelf: "flex-end",
    fontSize: 13
  }
});
