import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export default function Card({ children }: { children: ReactNode }) {
  return <View style={styles.appContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary.primary700,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
