import { getStudentTimetable } from "../api/functions";
import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import SchCard from "./SchCard";

const Todaytimetable = () => {
  const [data, setData] = useState({});

  return (
    <View>
      <Text>Your schedule for today:</Text>
      {data.classes && data.classes.length > 0 ? (
        data.classes.map((classData, index) => <SchCard data={classData} />)
      ) : (
        <Text>No classes found</Text>
      )}
    </View>
  );
};

export default Todaytimetable;
