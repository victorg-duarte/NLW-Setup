import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from "../screens/Home";
import { New } from "../screens/New";
import { Habit } from "../screens/Habit";

export function AppRouter() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }} // screenOptions tira o cabecalho do caminho da rota
    >
      <Screen
        name="home" // nome da rota
        component={Home} // componente renderizado
      />

      <Screen
        name="new" // nome da rota
        component={New} // componente renderizado
      />

      <Screen
        name="habit" // nome da rota
        component={Habit} // componente renderizado
      />
    </Navigator>
  )
}