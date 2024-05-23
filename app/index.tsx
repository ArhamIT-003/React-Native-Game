import PrimaryButton from "@/components/Primary-Button";
import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

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

    console.log("Valid number!");
  }

  function ResetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.appContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
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
  numberInput: {
    fontSize: 32,
    width: 50,
    height: 50,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: { flexDirection: "row" },
  button: {
    flex: 1,
  },
});
