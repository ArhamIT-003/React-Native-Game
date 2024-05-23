import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PrimaryButtonProps {
  children: ReactNode;
  onPress: () => void;
}

export default function PrimaryButton({
  children,
  onPress,
}: PrimaryButtonProps) {
  function pressHandler() {
    console.log("Button pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
