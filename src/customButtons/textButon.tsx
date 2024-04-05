import React from "react";

import { View,StyleSheet,Text } from "react-native";

export default function TextButton({text,value}){
    return(
        <>
        <Text>
            {text} : {value}
        </Text>
        </>
    )
}