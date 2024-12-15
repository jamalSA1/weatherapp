import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  RefreshControl,
  ScrollView,
  Text,
  Image,
} from "react-native";
import { useQuery } from "react-query";
import Header from "@/components/Header";
import WeatherInfo from "@/components/WeatherInfo";
import { getLocation, getWeather } from "@/utils/api";
import { checkDayNightCycle, getFormattedTime } from "@/utils/helpers";

const WeatherApp = () => {
  const [isDayTime, setIsDayTime] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const locationQuery = useQuery("location", getLocation, {
    onSuccess: (locationData) => {
      if (locationData) setLocation(locationData);
    },
  });

  const weatherQuery = useQuery(
    ["weather", location],
    async () => {
      const data = await getWeather(location!);
      if (data.city.sunrise && data.city.sunset) {
        const dayTime = checkDayNightCycle(data.city.sunrise, data.city.sunset);
        setIsDayTime(dayTime);
      }
      setLastUpdated(getFormattedTime());
      return data;
    },
    { enabled: !!location }
  );

  if (locationQuery.isLoading || weatherQuery.isLoading) {
    return (
      <View style={styles.center}>
        <Image source={require("../assets/animation/sunLoading.gif")} />
      </View>
    );
  }

  if (locationQuery.isError || weatherQuery.isError) {
    return (
      <View style={styles.center}>
        <Text>تعذر تحميل بيانات الطقس</Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
      ]}
    >
      <StatusBar barStyle={ "dark-content"} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={weatherQuery.isLoading}
            onRefresh={() => {
              locationQuery.refetch();
              weatherQuery.refetch();
            }}
          />
        }
      >
        {weatherQuery.data && (
          <>
            <Header weather={weatherQuery.data} isDayTime={isDayTime} />
            <WeatherInfo
              weather={weatherQuery.data}
              isDayTime={isDayTime}
              lastUpdated={lastUpdated}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WeatherApp;
