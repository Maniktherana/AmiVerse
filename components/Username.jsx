import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getStudentProfile } from "../api/functions";
import { styles } from "../styles/username";
import { SafeAreaView } from "react-native-safe-area-context";

function Username() {
  const [userid, setUserid] = useState({});

  useEffect(() => {
    async function profiler() {
      await getStudentProfile().then((data) => setUserid(data.data));
    }
    profiler();
  }, []);

  return (
    <>
      <SafeAreaView>
        <Text style={styles.hello}>Hello, {userid.name}</Text>
      </SafeAreaView>
    </>
  );
}

export default Username;
