import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";

export default function GuessLogView({
  roundNumber,
  guess,
}: {
  roundNumber: number;
  guess: number;
}) {
  return (
    <View style={styles.listItem}>
      <Text># {roundNumber}</Text>
      <Text>Opponent's Guess {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary.primary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
  },
});
