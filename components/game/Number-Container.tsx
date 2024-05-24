import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NumberContainer({ children }: { children: ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: Colors.primary.accent500, fontSize: 36, fontWeight: "bold" },
});
