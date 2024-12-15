import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import WeatherApp from "@/components/WeatherApp";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  );
};

export default App;
