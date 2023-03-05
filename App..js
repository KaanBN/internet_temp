import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from "./src/screens/LoginPage";
import MainScreen from "./src/screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'LoginScreen'}
        screenOptions={{
          headerShown:false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#FE7F38',
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarStyle: {
            backgroundColor: '#fff',
            paddingBottom: '3.5%',
            paddingTop: '3.5%',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderLeftWidth: 0.2,
            borderRightWidth: 0.2,
            zIndex: 1,
          },
        }}
      >
        <Tab.Screen name={'LoginScreen'} component={LoginPage} options={{
          tabBarStyle: {
            display: 'none',
          },
        }} />
        <Tab.Screen name={'MainScreen'} component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;
