import React from 'react'
import { Text, View } from 'react-native'

export const Home = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center px-4 space-y-4">
      <Text className="font-medium text-center text-neutral-700">
        Hello! This is a Base Project with, ESLint, Prettier, Typescript,
        Reanimated, Tailwind CSS, Navigation, Absolute path, Import sort, Hero
        Icons, Async Storage, Axios, React Native SVG and React Native Circular
        Progress.
      </Text>
      <Text className="font-bold text-center text-neutral-700 text-2xl">
        Enjoy it!
      </Text>
    </View>
  )
}
