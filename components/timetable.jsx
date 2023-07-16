import { getStudentTimetable } from "../api/functions";
import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import ScheduleCard from "./ScheduleCard";
import axios from "axios";

const Todaytimetable = () => {
  const [data, setData] = useState();
  let username = ""; // enter your amizone username
  let password = ""; // enter your amizone password
  let ngrokURL = "";

  useEffect(() => {
    (async () => {
      await axios
        .get(
          `${ngrokURL}/classSchedule?username=${username}&password=${password}`
        )
        .then((res) => {
          setData(res.data.classes);
          console.log("ressponse is ");
          console.log(res.data.classes);
        })
        .catch((error) => {
          console.error("Error fetching student timetable:", error);
          throw error;
        });
    })();
  }, []);
  //
  return (
    <View>
      <Text>Your schedule for today:</Text>
      {data ? (
        data.map((classData, index) => (
          <ScheduleCard key={index} data={classData} />
        ))
      ) : (
        <Text>No classes found for Today! </Text>
      )}
    </View>
  );
};

export default Todaytimetable;
