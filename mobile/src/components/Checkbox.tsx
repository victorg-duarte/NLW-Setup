import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

// TouchableOpacityProps - herdar todas as props do TouchableOpacity 
// ...rest - todas as props do TouchableOpacity como, onPress que é utilizado

export function Checkbox({ title, checked = false, ...rest }: Props) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row mb-2 items-center"
        {...rest} // passar rest para usar as props do touchable
      >

        {
          checked
            ?
            <Animated.View
              className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
              entering={ZoomIn} // animacao de entrada
              exiting={ZoomOut}// animacao de saida
            >
              <Feather
                name="check"
                size={20}
                color={colors.white}
              />
            </Animated.View>
            :
            <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
        }
        <Text className="text-white text-base font-semibold ml-3">
          {title}
        </Text>

      </TouchableOpacity>
    </View>
  )
}