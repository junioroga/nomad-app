import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Animated, {
  Easing,
  FadeIn,
  runOnJS,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { RootStackParamList } from '@navigation/AppNavigation'
import { hp, wp } from '@utils/responsive'

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

export const Splash = () => {
  const insets = useSafeAreaInsets()
  const translateXImage = useSharedValue(wp(0))
  const translateXText = useSharedValue(wp(20))
  const navigation = useNavigation<NavigationProps>()

  const goToHome = () => {
    setTimeout(() => navigation.push('Home'), 1000)
  }

  useEffect(() => {
    translateXImage.value = withDelay(
      1100,
      withTiming(insets.bottom ? -wp(15.5) : -wp(12.5), {
        duration: 700,
        easing: Easing.linear,
      }),
    )
    translateXText.value = withDelay(
      1200,
      withTiming(
        wp(5.5),
        {
          duration: 700,
          easing: Easing.linear,
        },
        (finished) => {
          if (finished) {
            runOnJS(goToHome)()
          }
        },
      ),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runOnJS, goToHome, insets.bottom])

  return (
    <View className="flex-1" style={{ backgroundColor: '#FFD400' }}>
      <View className="flex-1 flex-row items-center justify-center">
        <Animated.Image
          entering={FadeIn.delay(300).duration(700)}
          source={require('@assets/nomad.png')}
          style={{
            height: hp(8),
            width: hp(5.5),
            transform: [{ translateX: translateXImage }],
          }}
        />
        <Animated.Text
          entering={FadeIn.delay(1200).duration(700)}
          className="font-bold absolute text-neutral-800"
          style={{
            fontSize: hp(4),
            transform: [{ translateX: translateXText }],
            letterSpacing: 3,
          }}>
          OMAD
        </Animated.Text>
      </View>
      <View style={{ paddingHorizontal: hp(2) }}>
        <Text
          className="text-center text-neutral-700"
          style={{ fontSize: hp(1.4), paddingBottom: insets.bottom || hp(2) }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
    </View>
  )
}
