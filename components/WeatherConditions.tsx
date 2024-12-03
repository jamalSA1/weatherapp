import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type WeatherConditionsProps = {
  temp: number;
  cloud: number;
};

const WeatherConditions = ({ temp, cloud }: WeatherConditionsProps) => {
  return (
    <View>
      <View>
        <View style={styles.notices}>
          <View style={styles.clouds}>
            <Text style={styles.cloudNumber}>
           الغيوم: {cloud}
          </Text>
          <Image source={require("../assets/images/CloudIcon.png")} style={{width:20, height:20}} />
          </View>
        <View>
          {temp < 30 ? <>
            <Text style={styles.itsGoodWeather}>
            جيد جدا
            </Text>
          </> : <>
          <Text style={styles.GoodWeather}>جيد</Text>
          </>}
        </View>
        </View>
      </View>
      <View>
        {temp > 30 ? (
              <Text style={[styles.weatherNews, { backgroundColor: '#E72929' }]}>تحذير من موجة حر</Text>

          ) : temp <= 10 ? (
              <Text style={[styles.weatherNews, { backgroundColor: '#006BFF' }]}>تحذير من موجة برد</Text>

          ) : cloud > 10 && temp < 25 ? (
            <Text style={[styles.weatherNews, { backgroundColor: '#1A5319' }]}>
              توقعات امطار غزيرة
            </Text>
          ) : cloud < 10 && temp > 25 ? (
            <Text style={[styles.weatherNews, { backgroundColor: '#344955' }]}>
              توقعات امطار خفيفة
            </Text>
          ) : null}

      </View>
    </View>
  );
};

export default WeatherConditions;

const styles = StyleSheet.create({
  adverbs: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  clouds: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center', 
    borderWidth: 1,
    borderColor: '#0D92F4',
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 2,
  },
  cloudNumber: {
    color: '#0D92F4',
    fontSize: 15,
    textAlign: 'right', 
  },
  itsGoodWeather: {
    color: '#FF9D3D',
    borderWidth: 1,
    borderColor: '#FF9D3D',
    fontSize: 15,
    textAlign: 'right',
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 2, 
  },
  GoodWeather: {
    color: '#54C392',
    borderWidth: 1,
    borderColor: '#54C392',
    fontSize: 15,
    textAlign: 'right',
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 2, 
  },
  notices: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  weatherNews: {
    padding: 5,
    marginTop: 10,
    borderRadius: 50,
    color: 'white',
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
  },
});
