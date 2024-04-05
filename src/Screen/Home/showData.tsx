import React from "react";
import TextButton from "../../customButtons/textButon";
import { SignUpData } from "../../utils/enums";


export default function ShowData({route}){
    const data = route.params;
    return (
        <>
        <TextButton text={SignUpData.FirstName} value={data[SignUpData.FirstName]}/>
        <TextButton text={SignUpData.LastName} value={data[SignUpData.LastName]}/>
        <TextButton text={SignUpData.PhoneNumber} value={data[SignUpData.PhoneNumber]}/>
        <TextButton text={SignUpData.DateOfBirth} value={data[SignUpData.DateOfBirth]}/>
        <TextButton text={SignUpData.Email} value={data[SignUpData.Email]}/>
        {/* <TextButton text={SignUpData.} value={data[SignUpData.]}/> */}
        </>
    )
}