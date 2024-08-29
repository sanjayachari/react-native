import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Bg1 from "./Bg1";
import Bg3 from "./Bg3";
import Bg4 from "./Bg4";
import Bg2 from "./Bg2";

const ColorScreen = ({ route, navigation }) => {
  const [render, setRender] = useState("Home");

  //   console.log("render", render);
  useEffect(() => {
    switch (route.name) {
      case "Home":
        setRender("Home");
        break;

      case "form":
        setRender("form");

        break;

      case "swiper":
        setRender("swiper");
        break;

      case "Account":
        setRender("Account");
        break;

      default:
        setRender("Home");
    }
  }, [route.name]);
  //   console.log("route", route.name);
  return (
    <View >
      {render === "Home" && <Bg1 />}
      {render === "form" && <Bg2 />}
      {render === "swiper" && <Bg3 />}
      {render === "Account" && <Bg4 />}
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
 
  });