import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import { View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index"
          options={{
            headerTitle: () => <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{
                  height: 30,
                  width: 150,
              }}
                source={require('@/assets/images/Chase_logo.png')}
                contentFit="contain"
            />
            </View>,
            headerStyle: {
              backgroundColor: '#145bb5',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        <Stack.Screen name="+not-found" />
      </Stack>
    // </ThemeProvider>
  );
}
