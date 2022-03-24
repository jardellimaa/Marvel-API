import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components";

import HomeScreen from "./src/screens/Home";
import Hero from "./src/screens/Search";
import HeroDetail from "./src/screens/HeroDetail";

const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

function HeroesStack() {
  const themeContext = useContext(ThemeContext);

  const config: any = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <AppStack.Navigator
      initialRouteName={"HeroHome"}
      screenOptions={{
        headerTintColor: themeContext.activeTintColor,
        headerStyle: { backgroundColor: themeContext.background },
      }}
    >
      <AppStack.Screen
        name="HeroHome"
        component={Hero}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          cardStyle: {
            backgroundColor: "black",
          },
          headerTitle: "Heroes",
        }}
      />
      <AppStack.Screen
        name="HeroDetail"
        component={HeroDetail}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          cardStyle: {
            backgroundColor: "black",
          },
          headerTitle: "Hero Detail",
        }}
      />
    </AppStack.Navigator>
  );
}

export default function Routes() {
  const themeContext = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <TabStack.Navigator
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else {
              iconName = focused ? "reader" : "reader-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: themeContext.activeTintColor,
          inactiveTintColor: "gray",
          style: {
            backgroundColor: themeContext.background,
            borderTopColor: themeContext.background,
            paddingBottom: 3,
            paddingTop: 3,
          },
        }}
      >
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen name="Heroes" component={HeroesStack} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}
