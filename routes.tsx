import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/Home";
import Hero from "./src/screens/Search";
import HeroDetail from "./src/screens/HeroDetail";

const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

function HeroesStack() {
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
    <AppStack.Navigator>
      <AppStack.Screen
        name="HeroHome"
        component={Hero}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
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
        }}
      />
    </AppStack.Navigator>
  );
}

export default function Routes() {
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
          activeTintColor: "rgba(52, 25, 72, 1)",
          inactiveTintColor: "gray",
        }}
      >
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen name="Hero" component={HeroesStack} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}
