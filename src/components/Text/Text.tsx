import React from 'react'
import { Text as RNText } from 'react-native'

type Props = {
  children: React.ReactNode
}

export const Text = ({ children }: Props) => (
  <RNText className="font-sans">{children}</RNText>
)
