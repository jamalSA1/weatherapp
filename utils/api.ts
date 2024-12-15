import * as Location from "expo-location";
import { OPNEWEATHER_API_KEY } from "@/my-keys/all-keys";

export const getLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    throw new Error("تم رفض الإذن للوصول إلى الموقع");
  }
  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;
  return { latitude, longitude };
};

export const getWeather = async (location: { latitude: number; longitude: number }) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${OPNEWEATHER_API_KEY}&units=metric&lang=ar`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("فشل تحميل بيانات الطقس");
  }
  return response.json();
};
