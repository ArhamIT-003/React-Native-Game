import PrimaryButton from "@/components/ui/Primary-Button";
import { useContext, useState } from "react";
import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { NumberContext } from "@/context/Number-Context";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/Instruction-Text";

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { setEnteredValue } = useContext(NumberContext)!; // Added '!' to assert that the context is not null

  function numberInputHandler(inputNumber: string) {
    setEnteredNumber(inputNumber);
  }

  function confirmInputHandler() {
    const entered = parseFloat(enteredNumber);
    if (isNaN(entered) || entered <= 0 || entered > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: ResetInputHandler },
      ]);
      return;
    }

    setEnteredValue(entered.toString());
    console.log("Valid number!");

    router.navigate("/GameScreen");
  }

  function ResetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={ResetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    fontSize: 32,
    width: 50,
    height: 50,
    borderBottomColor: Colors.primary.accent500,
    borderBottomWidth: 2,
    color: Colors.primary.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: { flexDirection: "row" },
  button: {
    flex: 1,
  },
});
