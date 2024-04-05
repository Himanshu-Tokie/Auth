import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import Home from './src/Screen/Home/Home';
import Process from './src/Screen/Process/process';
import UserSignIn from './src/Screen/SignIn/signIn';
import SignUpPage from './src/Screen/SignUp/signUp';
import {Data} from './src/utils/context';
import ShowData from './src/Screen/Home/showData';
// const data = useRef({})
const Stack = createNativeStackNavigator();
export default function App() {
  const [data, setData] = useState({
    'Himanshu@gmail.com': {
      Password: 'Anil@123',
    },
  });
  return (
    <NavigationContainer>
      <Data.Provider value={[data, setData]}>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={UserSignIn} />
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
          <Stack.Screen name="showData" component={ShowData} />
        </Stack.Navigator>
      </Data.Provider>
    </NavigationContainer>
  );
}
