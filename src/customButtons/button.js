import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SignUpData } from '../utils/enums';
import Number from './PhoneNumber';
import Date from './date';

function SignUpTemplate({text, changeState, isConfirmPassword,alert,value}) {
  const DOB = useRef(false);
  const number = useRef(false);
  const security = useRef(false);
  const contact = useRef('default');
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [focus, setFocus] = useState(false);
  const [emptyText, setEmptyText] = useState(false);
  const [err, setErr] = useState(false);
  const [eye, setEye] = useState(true);
  function check(input) {
    let regex;
    switch (text) {
      case SignUpData.FirstName:
      case SignUpData.LastName:
        regex = /^[A-Za-z]+$/;
        break;
      case SignUpData.Email:
      case SignUpData.UserName:
        regex = /^[(\w\d\.\/\_)+]+@[\w+]+(\.[\w+]{2,})+$/i;
        break;
      case SignUpData.Password:
      case SignUpData.UserPassword:
      case SignUpData.ConfirmPassword:
        regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}$/;
        break;
      default:
        regex = /.*/; // Default to allow any input
        break;
    }
    ok = regex.test(input);
    if (text === SignUpData.ConfirmPassword) {
      if (isConfirmPassword === input) {
        setPasswordAlert(false);
      } else setPasswordAlert(true);
    }
    if ((ok || input == '') && input.length < 30) {
      if (input == '') setEmptyText(true);
      if (input != '') setEmptyText(false);
      changeState(input);
      setErr(false);
    } else {
      setEmptyText(false);
      setErr(true);
    }
    if(text == SignUpData.UserName || text==SignUpData.UserPassword)
    changeState(input);
  }

  function changeFocus() {
    if (text === SignUpData.Password) setFocus(!focus);
  }

  if (text === SignUpData.PhoneNumber) {
    contact.current = 'number-pad';
    number.current = true;
  } else if (text === SignUpData.DateOfBirth) DOB.current = true;
  else if (
    (text === SignUpData.Password ||
      text === SignUpData.ConfirmPassword ||
      text === SignUpData.UserPassword) &&
    eye
  )
    security.current = true;

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>

        <View>
          {DOB.current ? (
            <View style={styles.textInput}>
              <Date changeState={changeState} theme={'dark'}></Date>
            </View>
          ) : number.current ? (
            <Number changeState={changeState} setErr={setErr} />
          ) : (
            <View style={styles.textInput}>
              <View>
                <TextInput
                  style={{width: 200}}
                  onChangeText={check}
                  placeholder={text}
                  color="white"
                  onFocus={changeFocus}
                  onBlur={changeFocus}
                  value={value}
                  placeholderTextColor="grey"
                  secureTextEntry={security.current}
                  keyboardType={contact.current}
                  autoCapitalize={
                    text === SignUpData.ConfirmPassword ||
                    text === SignUpData.Password ||
                    text === SignUpData.Email ||
                    text === SignUpData.UserName ||
                    text === SignUpData.UserPassword
                      ? 'none'
                      : 'words'
                  }></TextInput>
              </View>
              {(text === SignUpData.Password ||
                text === SignUpData.ConfirmPassword ||
                text === SignUpData.UserPassword) && (
                <>
                  <View>
                    <Icon
                      name="eye"
                      size={18}
                      color="white"
                      backgroundColor="transparent"
                      onPress={() => {
                        security.current = false;
                        setEye(!eye);
                      }}
                    />
                  </View>
                </>
              )}
            </View>
          )}
        </View>

        {(focus && text !== SignUpData.UserPassword)&& (
          <Text style={styles.alertText}>
            Minimum Length required 8 digits including an uppercase, a
            lowercase, special character.
          </Text>
        )}
        {((err &&
          text !== SignUpData.DateOfBirth &&
          text !== SignUpData.ConfirmPassword && 
          text!== SignUpData.UserName &&
          text !== SignUpData.UserPassword) ||alert) &&(
            <View>
              <Text style={styles.errText}>*Invalid {text}</Text>
            </View>
          )}
        {passwordAlert && (
          <Text style={styles.errText}>*Password doesn't match</Text>
        )}

        {emptyText &&
        text!== SignUpData.UserName &&
        text !== SignUpData.UserPassword 
        && <Text style={styles.errText}>*Fill {text}</Text>}

      </View>
    </>
  );
}

export default SignUpTemplate;

let styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
    padding: 10,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  errText: {
    color: 'red',
    fontWeight: '400',
  },
  alertText: {
    color: 'grey',
  },
});
