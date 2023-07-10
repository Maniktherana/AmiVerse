import React, { useEffect, useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { FONTS } from "../constants/fonts";
import { PaperProvider, Text } from "react-native-paper";
// import Config from "react-native-config";

async function getStudentProfile() {
  let baseUrl = "http://localhost:3000/api/v1/user_profile";
  let username = "";
  let password = "";

  let response = await axios.post(
    baseUrl,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      auth: {
        username,
        password,
      },
    }
  );
  return response.data;
}

function Username() {
  const [data, setData] = useState({});

  useEffect(() => {
    getStudentProfile().then((data) => setData(data));
  }, []);

  return (
    // <PaperProvider>
    <View>
      <Text>Hello {data.name}</Text>
    </View>
    // </PaperProvider>
  );
}

// const heading1: {
//      fontSize: 24,
//      fontWeight: 'bold',
//      color: 'black',
// }

export default Username;
