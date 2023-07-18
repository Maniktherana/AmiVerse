import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { styles } from "../styles/username";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { ngrokURL } from "../constants/config";

function Username() {
  const [userProfile, setUserProfile] = useState({});
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

    async function getUserProfile() {
      await axios
        .get(
          `${ngrokURL}/userProfile?username=${secUsername}&password=${secPassword}`
        )
        .then((res) => {
          setUserProfile(res.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    // only make the api call when both te credentials are available
    secPassword && secUsername && getUserProfile();
  }, [secUsername, secPassword]);

  return (
    <>
      <SafeAreaView>
        {userProfile && (
          <Text style={styles.hello}>
            Hello, {userProfile.name ? userProfile.name : "No Name"}
          </Text>
        )}

        {/* I removed the following because we obviously don't want to show any cred on the frontend */}
        {/* <Text>
          Entered username: {secUsername ? secUsername : "notentered"}
        </Text>
        <Text>
          Entered password: {secPassword ? secPassword : "notentered"}
        </Text> */}
      </SafeAreaView>
    </>
  );
}

export default Username;
