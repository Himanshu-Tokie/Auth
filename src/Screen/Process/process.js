import React, { useContext } from "react";
import { Data } from "../../utils/context";

export default function Process({route,navigation}){
    const {UserName,Password} = route.params;
    const credentials = useContext(Data)
    console.log(JSON.stringify(route));
    if(credentials.hasOwnProperty(UserName))
    {
        console.log(credentials[UserName]);
        
        if(credentials[UserName].password===Password){
            navigation.navigate("Home")
        }
    }
    else{
        navigation.goBack();
    }
    return (
        <>

        </>
    )
}
