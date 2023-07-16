import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getStudentProfile } from "../api/functions";
import { styles } from "../styles/username";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";

function Username() {
  const [userid, setUserid] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // read data from local encrypted storage
  const retrieveData = async () => {
    try {
      const storedUsername = await SecureStore.getItemAsync("username");
      const storedPassword = await SecureStore.getItemAsync("password");

      if (storedUsername && storedPassword) {
        setUsername(storedUsername);
        setPassword(storedPassword);
      }
    } catch (error) {
      console.error("Error retrieving data from SecureStore:", error);
    }
  };
  // retreieve data from local storage then fetch profile
  useEffect(() => {
    async function profiler() {
      await retrieveData();
      await getStudentProfile().then((data) => setUserid(data.data));
    }
    profiler();
  }, []);

  return (
    <>
      <SafeAreaView>
        <Text style={styles.hello}>Hello, {userid.name}</Text>
        <Text>Entered username: {username ? username : "notentered"}</Text>
        <Text>Entered password: {password ? password : "notentered"}</Text>
      </SafeAreaView>
    </>
  );
}

export default Username;
