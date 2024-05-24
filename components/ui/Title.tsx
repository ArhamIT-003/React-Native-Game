import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Title({ children }: { children: ReactNode }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
