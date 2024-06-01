import PrimaryButton from "@/components/ui/Primary-Button";
import Title from "@/components/ui/Title";
import { Colors } from "@/constants/Colors";
import { NumberContext } from "@/context/Number-Context";
import { router } from "expo-router";
import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function GameOverScreen() {
  const { enteredValue, setEnteredValue, setNumberOfRounds, numberOfRounds } =
    useContext(NumberContext)!;

  function startNewGame() {
    router.navigate("/");
    setEnteredValue("");
    setNumberOfRounds(0);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over, You won!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlghtedText}>{numberOfRounds}</Text> rounds to
        guess number <Text style={styles.highlghtedText}>{enteredValue}</Text>.
      </Text>
      <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary.accent500,
    margin: 36,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  highlghtedText: {
    fontWeight: "bold",
    color: Colors.primary.primary500,
  },
});
