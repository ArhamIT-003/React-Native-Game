import NumberContainer from "@/components/game/Number-Container";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/Instruction-Text";
import PrimaryButton from "@/components/ui/Primary-Button";
import Title from "@/components/ui/Title";
import { NumberContext } from "@/context/Number-Context";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
export default function GameScreen() {
  const { enteredValue } = useContext(NumberContext)!;

  let minBoundary = 1;
  let maxBoundary = 100;

  const initialGuess = generateRandomBetween(1, 100, parseFloat(enteredValue));

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (parseFloat(enteredValue) === currentGuess) {
      router.navigate("/GameOverScreen");
    }
  }, [enteredValue, currentGuess]);

  function nextGuessHandler(direction: string) {
    if (
      (direction === "lower" && currentGuess < parseFloat(enteredValue)) ||
      (direction === "higher" && currentGuess > parseFloat(enteredValue))
    ) {
      Alert.alert("Don't lie", "You know this is wrong!.", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  function lowerGuessHandler() {
    nextGuessHandler("lower");
  }
  function higherGuessHandler() {
    nextGuessHandler("higher");
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructorText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={higherGuessHandler}>+</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={lowerGuessHandler}>-</PrimaryButton>
          </View>
        </View>
      </Card>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instructorText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
