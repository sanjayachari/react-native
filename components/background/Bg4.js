import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Bg4 = () => {
  return (
    <View style={styles.container}>
      <Text>Bg4</Text>
    </View>
  );
};

export default Bg4;

const styles = StyleSheet.create({
  container: {
    padding: "10px",
    backgroundColor: "#dff9fb",
    height: "100vh",
  },
});
