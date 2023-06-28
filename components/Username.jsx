// import axios from "axios";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import useSWR from "swr";

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
        <Text>Error fetching username</Text>
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
    <View>
      <Text>Username: {data.description} </Text>
    </View>
  );
}

export default Username;
