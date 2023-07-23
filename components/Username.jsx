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

  useEffect(() => {
    const getUsernameDataFromCache = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("UsernameData");
        //  return jsonValue != null ? JSON.parse(jsonValue) :  null;
        setUserProfile(JSON.parse(jsonValue));
      } catch (e) {
        // error reading value
      }
    };
    getUsernameDataFromCache();
  }, []);

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
