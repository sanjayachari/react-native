import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Bg3 = () => {
  return (
    <View style={styles.container}>
      <Text>Bg3</Text>
    </View>
  );
};

export default Bg3;

const styles = StyleSheet.create({
  container: {
    padding: "10px",
    backgroundColor: "#c7ecee",
    height: "100dvh",
  },
});
