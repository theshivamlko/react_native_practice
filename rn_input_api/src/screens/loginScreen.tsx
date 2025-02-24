import React, {PropsWithChildren, useState} from "react";
import {Button, Text, View} from "react-native";
import MyInput from "../myInput.tsx";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import {getAllUsers, submitUser} from "../api/user_api.ts";

export interface User{
    name: string;
    mobile: string;
}

type SectionProps = PropsWithChildren<{
    title: string;
}>;

export default function LoginScreen({children, title}: SectionProps): React.JSX.Element {

    const navigation=useNavigation();
    const [result, setResult] = useState<User[]>([]);
    const [input, setInput] = useState({
        email: '',
        phone: '',
        description: ''
    });


    return (

        <View style={{flexDirection: 'column', backgroundColor: 'white'}}>

            <MyInput hint="username"
                     keyboardType={'email-address'}
                     value={input.email}

                     onChange={(text) => {
                         console.log(text)
                         setInput((current) => {
                             return ({
                                 ...current,
                                 ["email"]: text
                             });
                         });
                     }}
            />

            <MyInput hint="mobile" keyboardType={'numeric'}
                     value={input.phone}
                     onChange={(text) => {
                         console.log(text)
                         console.log(input)
                         setInput((current) => {
                             return ({
                                 ...current,
                                 ["phone"]: text
                             });
                         });
                     }}
            />
            <MyInput hint="Description" keyboardType={'default'}
                     value={input.description}
                     onChange={(text) => {
                         setInput((current) => {
                             return ({
                                 ...current,
                                 ["description"]: text
                             });
                         });
                     }}
                     isMultiline={true}
            />

            <Button title="Submit" onPress={() => {
                submitUser(input);
            }} />

            <View
            style={{
                padding:20
            }}
            />

            <Button title="Fetch All Users" onPress={() => {
               getAllUsers().then((res)=>{

                   setResult(res["data"] as User[]);
               });
            }} />

            <Text>{result}</Text>
        </View>
    );
}
