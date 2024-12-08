import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  RefreshControl,
  ScrollView,
  ImageBackground
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import * as Location from "expo-location";
import { Weather } from "@/types/weather";
import {OPENCAGE_API_KEY} from "@/my-keys/all-keys";
import {OPNEWEATHER_API_KEY} from "@/my-keys/all-keys";
import WeatherInfo from "@/components/WeatherInfo";


const index = () => {
  const [weather, setWeather] = useState<Weather>();
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const fetchWeather = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPNEWEATHER_API_KEY}&units=metric&lang=ar`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      console.log(data.list[0]);
      
      
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'م' : 'ص'; 
      const formattedHours = hours % 12 || 12;
      setLastUpdated(`${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`)

    } catch (error) {
      console.log(error);
    }
  };


  const fetchAddress = async (lat: number, lon: number) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${OPENCAGE_API_KEY}&language=ar`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
      } 
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("تنبيه", "تم رفض الإذن للوصول إلى الموقع");
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      await fetchWeather(latitude, longitude);
      await fetchAddress(latitude, longitude);
      setLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert("خطأ", "تعذر الحصول على الموقع");
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

if (!weather) {
  return (
    <View style={styles.errorContainer}>
      <Text>تعذر تحميل بيانات الطقس</Text>
    </View>
  );
}  


  return (
    <>
    <StatusBar barStyle="dark-content" />

    <SafeAreaView>
      <ScrollView  refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getLocation} />
      }>
      <View>
        <Header weather={weather} />

        <WeatherInfo weather={weather} lastUpdated={lastUpdated} />

      </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  bg: {
    height: 100,
    backgroundColor: "white"
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  addressText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center"
  }
});
