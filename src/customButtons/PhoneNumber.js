import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#323139",
    padding: 0,
    paddingHorizontal:0,
    paddingVertical:0,
    borderRadius:0,
    borderWidth:0,
    borderRadius: 30,
  },
  wrapper: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 30,
    backgroundColor:"#323139",
    // borderWidth: 2,
    // borderColor: 'grey',
    // borderRadius: 50,
    // width:275,
    padding:0,
  },
  button: {},
  message: {},
  errText: {
    color: 'red',
    fontWeight: '400',
  },
  inputText: {
    color: "white", // Set text color to white
  }
});

function Phone({ changeState }) {
  // const [value, setValue] = useState("");
  // const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const [err, setErr] = useState(false);

  return (
    <>

        <SafeAreaView>
          <PhoneInput
            ref={phoneInput}
            defaultCode="IN"
            layout="first"
            // phoneInput.current?.isValidNumber(text);
            onChangeText={(text) => {
              const checkValid = phoneInput.current?.isValidNumber(text);
              setValid(checkValid ? checkValid : false);
              if(text===""){setErr(false);}
              else
              setErr(!checkValid);
              
            }}
            onChangeFormattedText={(text) => {
              if(phoneInput.current?.isValidNumber(text))
              changeState(text);
            else{
              changeState("");
            }
            }}
            withDarkTheme={true}
            withShadow={false}
            autoFocus={true}
            containerStyle={styles.wrapper} // Pass the wrapper style to PhoneInput
            textContainerStyle={styles.container}
            placeholderTextColor="white" // Set placeholder text color to white
            codeTextStyle={{ color: "white" }}
            textInputStyle={{color:"white"}}
            // textInputProps={{ style: styles.inputText }} // Custom style for text input
          />
          {err &&(
          <View>
            <Text style={styles.errText}>*Invalid number</Text>
          </View>
        )}
        </SafeAreaView>

    </>
  );
};

export default Phone;


