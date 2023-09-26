import {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
  useFonts,
} from '@expo-google-fonts/lato'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { StatusBar } from 'expo-status-bar'

import AppNavigation from '@navigation/AppNavigation'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppNavigation />
    </SafeAreaProvider>
  )
}
