import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

export default function InstructionText({
  children,
  style,
}: {
  children: ReactNode;
  style?: Object;
}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary.accent500,
    fontSize: 24,
  },
});
