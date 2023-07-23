import React, { useEffect, useState } from "react";
import { View, Text, useLayoutEffect } from "react-native";
import axios from "axios";
import { styles } from "../styles/username";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { ngrokURL } from "../constants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Username() {
  const [userProfile, setUserProfile] = useState({});
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // useEffect(() => {
  //   const retrieveData = async () => {
  //     try {
  //       const StoredUserInformation = await SecureStore.getItemAsync(
  //         "User_info"
  //       );
  //       // const storedPassword = await SecureStore.getItemAsync('password');

  //       if (StoredUserInformation) {
  //         setUserProfile(StoredUserInformation);
  //       }
  //     } catch (error) {
  //       console.error("Error retrieving data from SecureStore:", error);
  //     }
  //   };
  //   retrieveData();
  // }, []);

  useEffect(() => {
    const getUsernameDataFromCache = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("UsernameData");
        console.log("cache se mila", jsonValue);
        //  return jsonValue != null ? JSON.parse(jsonValue) :  null;
        console.log("NAME", userProfile.name);
        setUserProfile(JSON.parse(jsonValue));
      } catch (e) {
        // error reading value
      }
    };
    getUsernameDataFromCache();
  }, []);

  const retrieveData = async () => {
    try {
      const StoredUserInformation = await SecureStore.getItemAsync("user_info");
      // const storedPassword = await SecureStore.getItemAsync('password');

      if (StoredUserInformation) {
        setUserProfile(StoredUserInformation);
      }
    } catch (error) {
      console.error("Error retrieving data from SecureStore:", error);
    }
  };
  return (
    <>
      <SafeAreaView>
        {userProfile && (
          <Text style={styles.hello}>
            Hello, {userProfile.name ? userProfile.name : "No Name"}
          </Text>
        )}
      </SafeAreaView>
    </>
  );
}

export default Username;
