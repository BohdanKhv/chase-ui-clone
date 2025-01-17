import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#f1f1f1',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconSymbol
              name={isFocused ? `${route.name}.active` : route.name}
              size={22}
              color={isFocused ?'#145bb5' : "#666"}
              />
            <Text style={{ color: isFocused ? '#145bb5' : '#666', fontSize: 10, fontWeight: '600', paddingTop: 4 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
        screenOptions={{
          header: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 16,
                  marginTop: 24,
                  backgroundColor: '#f4f6f8',
                }}
              >
                <IconSymbol
                  name="accounts"
                  size={26}
                  color={"#444"}
                />
                <IconSymbol
                  name="user"
                  size={26}
                  color={"#444"}
                />
              </View>
            )
          }
        }}
        tabBar={props =>  <TabBar {...props}/>}
      >
      <Tabs.Screen
        name="accounts"
        options={{
          title: 'Accounts',
        }}
      />
      <Tabs.Screen
        name="pay"
        options={{
          title: 'Pay & transfer',
        }}
      />
      <Tabs.Screen
        name="plan"
        options={{
          title: 'Plan & track',
        }}
      />
      <Tabs.Screen
        name="benefits"
        options={{
          title: 'Benefits & travel',
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
        }}
      />
    </Tabs>
  );
}

export default TabLayout;