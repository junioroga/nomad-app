import React, { useState } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {
  ChevronRightIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  EyeIcon,
  EyeSlashIcon,
  GiftIcon,
  PaperAirplaneIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
  UserIcon,
} from 'react-native-heroicons/outline'
import Animated, {
  Easing,
  FadeIn,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { hp, wp } from '@utils/responsive'

export const Home = () => {
  const insets = useSafeAreaInsets()
  const [showCurrency, setShowCurrency] = useState(false)
  const currency = useSharedValue(1)
  const header = useSharedValue(hp(13))
  const footer = useSharedValue(insets.bottom ? hp(11) : hp(9))
  const dash = useSharedValue(hp(1))

  const handleCurrency = () => {
    currency.value = 0
    currency.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.quad),
    })

    setShowCurrency((old) => !old)
  }

  const handleInvite = () => {
    dash.value = withTiming(dash.value === hp(4) ? hp(1) : hp(4), {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    })
  }

  const aref = useAnimatedRef<Animated.ScrollView>()
  const scrollHandler = useScrollViewOffset(aref)

  const dashStyle = useAnimatedStyle(() => ({
    width: dash.value,
  }))

  const currencyStyle = useAnimatedStyle(() => ({
    opacity: currency.value,
  }))

  const headerStyle = useAnimatedStyle(() => ({
    height:
      header.value + (scrollHandler.value < 0 ? scrollHandler.value * -1 : 0),
  }))

  const footerStyle = useAnimatedStyle(() => ({
    height: footer.value + (scrollHandler.value > 0 ? scrollHandler.value : 0),
  }))

  return (
    <View className="flex-1">
      {/* header icons */}
      <Animated.View
        className="z-10 absolute flex flex-row justify-between items-center"
        style={[
          {
            backgroundColor: '#FFD400',
            paddingTop: insets.top,
            width: '100%',
            paddingLeft: hp(0.7),
            paddingRight: hp(2),
            paddingVertical: hp(1),
          },
          headerStyle,
        ]}>
        <Image
          source={require('@assets/nomad.png')}
          style={{ height: hp(5.7), width: hp(5.7) }}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity onPress={handleCurrency}>
            {showCurrency ? (
              <EyeIcon size={hp(2.7)} color="black" />
            ) : (
              <EyeSlashIcon size={hp(2.7)} color="black" />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <GiftIcon size={hp(2.7)} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <UserIcon size={hp(2.7)} color="black" />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* middle informations */}
      <Animated.ScrollView
        ref={aref}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
        }}
        style={{ paddingTop: hp(13) }}
        scrollEventThrottle={16}>
        {/* invite and currency */}
        <View
          className="space-y-4"
          style={{
            backgroundColor: '#FFD400',
            height: '37%',
            paddingHorizontal: hp(2),
          }}>
          <View className="flex-1 bottom-5">
            <Animated.View
              entering={FadeIn.delay(1200).duration(700)}
              className="flex-1">
              <TouchableOpacity
                className="space-y-1"
                style={{ top: hp(6) }}
                onPressIn={handleInvite}
                onPressOut={handleInvite}>
                <Text
                  className="font-semibold text-black"
                  style={{ fontSize: hp(1.7) }}>
                  Convide e ganhe!
                </Text>
                <Text className="text-black" style={{ fontSize: hp(1.7) }}>
                  Compartilhe seu código com amigos
                </Text>
                <Animated.View
                  className="bg-black"
                  style={[{ height: hp(0.2), top: hp(0.6) }, dashStyle]}
                />
              </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity className="flex-row justify-between">
              <View className="space-y-1">
                <Text className="font-semibold" style={{ fontSize: hp(1.9) }}>
                  Conta
                </Text>
                <Animated.View
                  entering={FadeIn.delay(500).duration(700)}
                  style={[{ paddingBottom: hp(1) }, currencyStyle]}>
                  {showCurrency ? (
                    <Text style={{ fontSize: hp(2) }}>
                      $ <Text style={{ fontSize: hp(3.5) }}>7,16</Text>
                    </Text>
                  ) : (
                    <Text
                      className="text-neutral-500"
                      style={{
                        fontSize: hp(3.5),
                        opacity: 0.5,
                        top: hp(-0.5),
                      }}>
                      ••••••
                    </Text>
                  )}
                </Animated.View>
              </View>
              <View className="flex-row space-x-2 items-center">
                <CurrencyDollarIcon size={hp(2.7)} color="black" />
                <ChevronRightIcon
                  size={hp(1.2)}
                  strokeWidth={3}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* options */}
        <View className="flex-1 bg-white">
          <TouchableOpacity
            className="flex-row items-center justify-between"
            style={{ height: hp(9.2), paddingHorizontal: hp(2) }}>
            <Text className="font-semibold" style={{ fontSize: hp(1.9) }}>
              Investimentos
            </Text>
            <View className="flex-row space-x-2 items-center">
              <PresentationChartLineIcon size={hp(2.7)} color="black" />
              <ChevronRightIcon size={hp(1.2)} strokeWidth={3} color="black" />
            </View>
          </TouchableOpacity>
          <View
            className="border-separate bg-neutral-300"
            style={{ height: hp(0.1), marginVertical: hp(0.1) }}
          />
          <TouchableOpacity
            className="flex-row items-center justify-between"
            style={{ height: hp(9.2), paddingHorizontal: hp(2) }}>
            <Text className="font-semibold" style={{ fontSize: hp(1.9) }}>
              Cartões
            </Text>
            <View className="flex-row space-x-2 items-center">
              <CreditCardIcon size={hp(2.7)} color="black" />
              <ChevronRightIcon size={hp(1.2)} strokeWidth={3} color="black" />
            </View>
          </TouchableOpacity>
          <View
            className="border-separate bg-neutral-300"
            style={{ height: hp(0.1), marginVertical: hp(0.1) }}
          />
          <TouchableOpacity
            className="flex-row items-center justify-between"
            style={{ height: hp(9.2), paddingHorizontal: hp(2) }}>
            <Text className="font-semibold" style={{ fontSize: hp(1.9) }}>
              Shop
            </Text>
            <View className="flex-row space-x-2 items-center">
              <ShoppingBagIcon size={hp(2.7)} color="black" />
              <ChevronRightIcon size={hp(1.2)} strokeWidth={3} color="black" />
            </View>
          </TouchableOpacity>

          <View className="flex-1">
            {/* shop */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: hp(2),
                paddingTop: hp(1),
                flexGrow: 1,
              }}>
              <TouchableOpacity
                className="space-y-2 mr-4"
                style={{ height: hp(6), width: hp(8) }}>
                <Image
                  className="rounded-lg"
                  source={require('@assets/booking.png')}
                  style={{ height: hp(6), width: hp(8) }}
                />
                <Text
                  className="text-center text-neutral-500"
                  style={{ fontSize: hp(1.2), lineHeight: hp(1.8) }}>
                  3% de cashback
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="space-y-2 mr-4"
                style={{ height: hp(6), width: hp(8) }}>
                <Image
                  className="rounded-lg"
                  source={require('@assets/rentcars.png')}
                  style={{ height: hp(6), width: hp(8) }}
                />
                <Text
                  className="text-center text-neutral-500"
                  style={{ fontSize: hp(1.2), lineHeight: hp(1.8) }}>
                  6% de desconto
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="space-y-2 mr-4"
                style={{ height: hp(6), width: hp(8) }}>
                <Image
                  className="rounded-lg"
                  source={require('@assets/assistcard.png')}
                  style={{ height: hp(6), width: hp(8) }}
                />
                <Text
                  className="text-center text-neutral-500"
                  style={{ fontSize: hp(1.2), lineHeight: hp(1.8) }}>
                  30% de desconto
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="space-y-2 mr-4"
                style={{ height: hp(6), width: hp(8) }}>
                <Image
                  className="rounded-lg"
                  source={require('@assets/tiqets.jpg')}
                  style={{ height: hp(6), width: hp(8) }}
                />
                <Text
                  className="text-center text-neutral-500"
                  style={{ fontSize: hp(1.2), lineHeight: hp(1.8) }}>
                  5% de desconto
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="space-y-2 mr-4"
                style={{ height: hp(6), width: hp(8) }}>
                <Image
                  className="rounded-lg"
                  source={require('@assets/avis.png')}
                  style={{ height: hp(6), width: hp(8) }}
                />
                <Text
                  className="text-center text-neutral-500"
                  style={{ fontSize: hp(1.2), lineHeight: hp(1.8) }}>
                  Até 20% de cashback
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="items-center space-y-2"
                style={{ height: hp(6), width: hp(7) }}>
                <View
                  className="items-center justify-center bg-neutral-100 rounded-lg"
                  style={{ height: hp(6), width: hp(6) }}>
                  <Text
                    className="text-neutral-500"
                    style={{
                      fontSize: hp(5),
                      letterSpacing: Platform.OS === 'ios' ? -5 : -1,
                      top: -1,
                    }}>
                    •••
                  </Text>
                </View>
                <Text
                  className="text-center text-neutral-500"
                  style={{ fontSize: hp(1.2), lineHeight: hp(1.8) }}>
                  Ver todos
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Animated.ScrollView>

      {/* footer buttons */}
      <Animated.View
        className="z-1 absolute bottom-0 flex-row justify-between space-x-2"
        style={[
          {
            backgroundColor: 'white',
            borderTopWidth: hp(0.1),
            borderTopColor: 'gray',
            width: '100%',
            paddingHorizontal: hp(2),
            paddingTop: hp(1),
          },
          footerStyle,
        ]}>
        <TouchableOpacity
          className="flex-1 bg-neutral-900 items-center justify-center rounded-lg"
          style={{ height: hp(7) }}>
          <View
            className="items-center flex-row space-x-3"
            style={{ paddingHorizontal: hp(2) }}>
            <View className="items-end" style={{ width: '30%' }}>
              <CurrencyDollarIcon size={hp(2.5)} color="#FFD400" />
            </View>
            <View style={{ width: '70%' }}>
              <Text
                style={{ fontSize: wp(3.5) }}
                className="text-white font-bold flex-wrap">
                Adicionar dinheiro
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 bg-neutral-900 items-center justify-center rounded-lg"
          style={{ height: hp(7) }}>
          <View
            className="items-center flex-row space-x-3"
            style={{ paddingHorizontal: hp(2) }}>
            <View className="items-end" style={{ width: '30%' }}>
              <PaperAirplaneIcon size={hp(2.5)} color="#FFD400" />
            </View>
            <View style={{ width: '70%' }}>
              <Text
                style={{ fontSize: wp(3.5) }}
                className="text-white font-bold flex-wrap">
                Transferir dinheiro
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}
