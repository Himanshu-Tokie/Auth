import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonTemplate from '../../customButtons/button';
import { Data } from '../../utils/context';
import { SignUpData } from '../../utils/enums';

export default function UserSignIn({ navigation, route }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const isFocused = true
  // const [data, setData] = useContext(Data);
  const [result, setResult] = useState(0);
  const [credentials,setCredentials] = useContext(Data);
  // console.log((Data));
  // setCredentials("hirmanshu",{password:"123"});
  // console.log(credentials);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // Alert.alert('')
      setUserName('');
      setPassword('');
    });
    return unsubscribe;
  }, [navigation]);
  

  // useFocusEffect(()=>{
  //   Alert.alert('in')
  // })

  // useEffect(() => {
  //   if (!isFocused) {
  //     setUserName('');
  //     setPassword('');
  //   }
  // }, [isFocused]);
  
  function checkData() {
    if (credentials.hasOwnProperty(userName)) {
      if (credentials[userName].Password === password) {
        navigation.push('Home', credentials[userName]);
      } else {
        setResult(1);
      }
    } else {
      setResult(1);
    }
  }

  function SignUp() {
    navigation.navigate('SignUp');
  }


  function forgot(){
    // if(credentials.hasOwnProperty(userName))
    navigation.navigate('ForgotPassword')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>
          SignIn
        </Text>
      </View>
    
      <View style={styles.textInput}>
      {
        isFocused && <>
          <ButtonTemplate
          text={SignUpData.UserName}
          changeState={setUserName}
          value={userName}
        ></ButtonTemplate>
        <ButtonTemplate
          text={SignUpData.UserPassword}
          changeState={setPassword}
          value={password}
        ></ButtonTemplate>
        </>
      }
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={checkData}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
        {result ? (<>
          <Text style={styles.errText}>Invalid Username or Password</Text>
        </>
        ) : (
          ''
        )}
        <Text onPress={forgot} style={styles.text}>Forget Password</Text>
        <TouchableOpacity style={styles.button} onPress={SignUp}>
          <Text style={styles.text}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#323139',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header:{
    fontSize:40,
    color:"white",
    fontWeight:"bold",
    alignItems:"center"
  },
  textInput: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 25,
  },
  text: {
    textAlign: 'center',
    paddingVertical: 10,
    color:'white',
    fontWeight:'bold'
  },
  button: {
    backgroundColor: 'green',
    borderWidth: 0,
    borderColor: 'grey',
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal: 60,
  },
  errText: {
    color: 'red',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 5,
  },
});
