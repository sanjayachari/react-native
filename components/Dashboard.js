import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import ColorScreen from "./background/ColorScreen";
import IconComp from "./IconComp";
const Tab = createBottomTabNavigator();

const Dashboard = () => {
  const TabArr = [
    {
      route: "Home",
      label: "Home",
      name: "home",
      type: <AntDesign name="user" size={24} color="black" />,
      activeIcon: <AntDesign name="user" size={24} color="black" />,
      inActiveIcon: <AntDesign name="user" size={24} color="black" />,
      component: ColorScreen,
    },
    {
      route: "form",
      label: "form",
      name: "form",
      type: <AntDesign name="user" size={24} color="black" />,
      activeIcon: "heart-plus",
      inActiveIcon: "heart-plus-outline",
      component: ColorScreen,
    },
    {
      route: "swiper",
      label: "swiper",
      name: "switcher",
      type: <AntDesign name="user" size={24} color="black" />,
      activeIcon: "timeline-plus",
      inActiveIcon: "timeline-plus-outline",
      component: ColorScreen,
    },
    {
      route: "Account",
      label: "Account",
      name: "user",
      type: <AntDesign name="user" size={24} color="black" />,
      activeIcon: "user-circle",
      inActiveIcon: "user-circle-o",
      component: ColorScreen,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {TabArr.map((e, i) => {
        return (
          <Tab.Screen
            name={e.route}
            component={e.component}
            key={i}
            options={{
              tabBarLabel: e.label,
              tabBarIcon: ({ focused }) => (
                // <AntDesign
                //   name="user"
                //   size={24}
                //   color={focused ? 'blue' : 'gray'}
                // />
                <IconComp focused={focused} name={e.name} type={e.type} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Dashboard;
