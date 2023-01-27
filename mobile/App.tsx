import './src/lib/dayjs' // utilizar o formato/hora pt-br
import { StatusBar, Button } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

async function scheduleNotification() {
  const trigger = new Date(Date.now())
  trigger.setSeconds(trigger.getSeconds() + 20)

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Olá, Victor 😜',
      body: 'você praticou seus hábitos hoje?'
    },
    trigger
  })
}

async function getScheduleNotification() {
  const schedule = await Notifications.getAllScheduledNotificationsAsync()
  console.log(schedule)
}


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  // if font not loaded
  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <>
      {/* <Button title='Enviar notificação' onPress={scheduleNotification}/> */}
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </>
  );
}