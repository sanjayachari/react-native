import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const Home = (props) => {
  const [message, setMessage] = useState("Hello world!");

  const changeMessage = () => {
    setMessage(message == "Hello world!" ? "Welcome to App" : "Hello world!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={changeMessage} style={styles.button}>
          <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Dashboard")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
        <View>
        </View>
        {/* <AntDesign name="user" size={24} color="black" /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  message: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "black",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

export default Home;
