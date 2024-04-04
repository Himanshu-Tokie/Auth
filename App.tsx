import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import UserSignIn from "./src/Screen/SignIn/signIn";
import { Data } from "./src/utils/context";
import Process from "./src/Screen/Process/process";
import Home from "./src/Screen/Home/Home";
import { SignUpData } from "./src/utils/enums";
import SignUpPage from "./src/Screen/SignUp/signUp";
// const data = useRef({})
const Stack = createNativeStackNavigator();
export default function App(){
  const [data,setData] = useState({})
  return (
    <NavigationContainer>
      <Data.Provider value={[data,setData]}>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={UserSignIn}/>
        <Stack.Screen name="Process" component={Process}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignUp" component={SignUpPage}/>
      </Stack.Navigator>
      </Data.Provider>
    </NavigationContainer>
  )
}