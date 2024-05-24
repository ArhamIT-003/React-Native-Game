import { Slot } from "expo-router";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import NumberContextProvider from "@/context/Number-Context";

export default function Layout() {
  return (
    <LinearGradient
      colors={[Colors.primary.primary700, Colors.primary.accent500]}
      style={styles.container}
    >
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <NumberContextProvider>
            <Slot />
          </NumberContextProvider>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
