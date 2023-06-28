// import axios from "axios";
import React, { useEffect } from "react";
import { View } from "react-native";
import useSWR from "swr";
import { FONTS } from "../constants/fonts";
import { PaperProvider } from "react-native-paper";
import { Text } from "react-native-paper";

function Username() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  if (error) {
    console.log("ERROR", JSON.stringify(error));
    return (
      <View>
        <Text variant="displayLarge">Error fetching username</Text>
      </View>
    );
  }
  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <PaperProvider>
      <View>
        <Text variant="titleMedium"> Username: {data.description} </Text>
      </View>
    </PaperProvider>
  );
}

// const heading1: {
//      fontSize: 24,
//      fontWeight: 'bold',
//      color: 'black',
// }

export default Username;
