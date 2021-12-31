import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

function AnimatedSplashScreen({ children, image }) {
    const animation = useMemo(() => new Animated.Value(1), []);
    const [isAppReady, setAppReady] = useState(false);
    const [isSplashAnimationComplete, setAnimationComplete] = useState(false);
  
    useEffect(() => {
      if (isAppReady) {
        Animated.timing(animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => setAnimationComplete(true));
      }
    }, [isAppReady]);
  
    const onImageLoaded = useCallback(async () => {
      try {
        await SplashScreen.hideAsync();
        await Font.loadAsync({
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (e) {
        // handle errors
      } finally {
        setAppReady(true);
      }
    }, []);
  
    return (
      <View style={{ flex: 1 }}>
        {isAppReady && children}
        {!isSplashAnimationComplete && (
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: Constants.manifest.splash.backgroundColor,
                opacity: animation,
              },
            ]}
          >
            <Animated.Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: Constants.manifest.splash.resizeMode || "contain",
                transform: [
                  {
                    scale: animation,
                  },
                ],
              }}
              source={image}
              onLoadEnd={onImageLoaded}
              fadeDuration={0}
            />
          </Animated.View>
        )}
      </View>
    );
  }

const AnimatedAppLoader = ({ children, image }) => {
    const [isSplashReady, setSplashReady] = useState(false);

    const startAsync = useCallback(
      () => Asset.fromModule(image).downloadAsync(),
      [image]
    );
  
    const onFinish = useCallback(() => setSplashReady(true), []);
  
    if (!isSplashReady) {
      return (
        <AppLoading
          autoHideSplash={false}
          startAsync={startAsync}
          onError={console.error}
          onFinish={onFinish}
        />
      );
    }
  
    return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

export { AnimatedAppLoader }
