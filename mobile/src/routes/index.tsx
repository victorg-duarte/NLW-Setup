import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRouter } from "./app.routes";

export function Routes() {
  return (
    <View className="flex-1 bg-background">
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </View>
  )
}