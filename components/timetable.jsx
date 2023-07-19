import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import ScheduleCard from "./ScheduleCard";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import { ngrokURL } from "../constants/config";

const Todaytimetable = () => {
  const [data, setData] = useState();
  const [secUsername, setUsername] = useState("");
  const [secPassword, setPassword] = useState("");
  // read data from local encrypted storage
  const retrieveData = async () => {
    try {
      const storedUsername = await SecureStore.getItemAsync("username");
      const storedPassword = await SecureStore.getItemAsync("password");

      if (storedUsername && storedPassword) {
        setUsername(storedUsername);
        setPassword(storedPassword);

        // console.log("stored username is ", storedUsername);
      }
    } catch (error) {
      console.error("Error retrieving data from SecureStore:", error);
    }
  };

  useEffect(() => {
    retrieveData();

    async function getTimeTable() {
      await axios
        .get(
          `${ngrokURL}/classSchedule?username=${secUsername}&password=${secPassword}`
        )
        .then((res) => {
          setData(res.data.classes);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    // only make the api call when both te credentials are available
    secPassword && secUsername && getTimeTable();
  }, [secUsername, secPassword]);
  //
  return (
    <View>
      {data && <Text>Your schedule for today:</Text>}
      {data ? (
        data.map((course, index) => <ScheduleCard key={index} data={course} />)
      ) : (
        <Text>No classes found for Today! </Text>
      )}
    </View>
  );
};

export default Todaytimetable;
