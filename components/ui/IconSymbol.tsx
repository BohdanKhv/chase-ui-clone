// This file is a fallback for using Ionicons on Android and web.

import Ionicons from '@expo/vector-icons/Ionicons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Add your SFSymbol to Ionicons mappings here.
const MAPPING = {
  // See Ionicons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'accounts': 'wallet-outline',
  'accounts.active': 'wallet-sharp',
  'pay': 'cash-outline',
  'pay.active': 'cash-sharp',
  'plan': 'document-outline',
  'plan.active': 'document-sharp',
  'benefits': 'star-outline',
  'benefits.active': 'star-sharp',
  'more': 'menu-outline',
  'more.active': 'menu-sharp',
  'user': 'person-circle-outline',
  'more-dots': 'ellipsis-horizontal-circle',
  'chevron-right': "chevron-forward",
  'pause': "pause-outline",
  "check": "checkmark-sharp",
  "speedometer": "speedometer-outline"
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof Ionicons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and Ionicons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to Ionicons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <Ionicons color={color} size={size} name={MAPPING[name]} style={style} />;
}
