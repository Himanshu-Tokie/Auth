import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
// import Forgot from './src/Screen/Forgot/forgot';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgotPassword from './src/Screen/Forgot/forgot';
import Home from './src/Screen/Home/Home';
import ShowData from './src/Screen/Home/showData';
import Process from './src/Screen/Process/process';
import UserSignIn from './src/Screen/SignIn/signIn';
import SignUpPage from './src/Screen/SignUp/signUp';
import { Data } from './src/utils/context';
// const data = useRef({})
const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchAllData() {
      // await AsyncStorage.clear();
      const Data = await AsyncStorage.getAllKeys();
      const fetchedData = await AsyncStorage.multiGet(Data);
      const userData = {};
      fetchedData.forEach(([key, value]) => {
        userData[key] = JSON.parse(value);
      });
      setData(userData);
      console.log(Data, 100);
    }
    fetchAllData();
  }, []);

  // useFocusEffect(()=>{

  // })

  async function StoreData(id: string, value: string) {
    await AsyncStorage.setItem(id, JSON.stringify(value));
    setData({...data, [id]: value});
  }

  return (
    <NavigationContainer>
      <Data.Provider value={[data, StoreData]}>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={UserSignIn}
            options={{
              headerShown: false,
              // useFocus: true
            }}
          />

          <Stack.Screen
            name="Process"
            component={Process}
            options={{
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerBackVisible: false,
            }}
          />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="Profile" component={ShowData} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </Data.Provider>
    </NavigationContainer>
  );
}
