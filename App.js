import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

export default function App() {
  const [list, setList] = useState([]);

  const [textInput, setTextInput] = useState("");

  const onAdd = () => {
    setList([...list, textInput]);
  };
  return (
    <>
      <View>
        <Text>Hola,Coder!</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Escribe Aqui"
            onChangeText={(text) => setTextInput(text)}
            style={styles.input}
          ></TextInput>
          <Button title="Add" onPress={() => onAdd()} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  containerInput: {
    backgroundColor: "blue",
    flexDirection: "row",
    width: "100%",
    height: "10%",
    marginTop: "3%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    width: "70%",
  },
});
