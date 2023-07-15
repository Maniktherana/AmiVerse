import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getStudentProfile } from "../api/functions";
import { styles } from "../styles/username";

function Username() {
  const [userid, setUserid] = useState({});

  useEffect(() => {
    getStudentProfile().then((data) => setUserid(data));
  }, []);

  return (
    <>
      <View>
        <Text style={styles.hello}>Hello, {userid.name}</Text>
      </View>
    </>
  );
}

// const heading1: {
//      fontSize: 24,
//      fontWeight: 'bold',
//      color: 'black',
// }

export default Username;
