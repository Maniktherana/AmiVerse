import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter, Redirect } from "expo-router";
import { styles } from "../styles/Login";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setIsloggedin] = useState(false);

  const handleLogin = async () => {
    try {
      await SecureStore.setItemAsync("username", username);
      await SecureStore.setItemAsync("password", password);
      //  console.log("Username and password saved securely.");
      setIsloggedin(true);
    } catch (error) {
      //  console.error("Error saving username and password:", error);
    }
  };

  return loggedin ? (
    <Redirect href="/home" />
  ) : (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default LoginScreen;
