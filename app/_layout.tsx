import { Slot, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Slot /> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
