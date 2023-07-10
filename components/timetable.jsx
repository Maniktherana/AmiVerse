import { getStudentTimetable } from "../controllers/functions";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/Timetable";
import { atob, btoa } from "base-64";

const Todaytimetable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const timetableData = await getStudentTimetable();
        setData(timetableData);
        console.log(timetableData);
      } catch (error) {
        console.log("Error fetching timetable:", error);
      }
    };

    fetchTimetable();
  }, []);

  return (
    <View>
      {data.classes && data.classes.length > 0 ? (
        data.classes.map((classData, index) => (
          <View style={styles.classContainer} key={index}>
            <Text style={styles.courseCode}>{classData.course.code}</Text>
            <Text style={styles.courseName}>{classData.course.name}</Text>
            <Text style={styles.time}>
              {classData.startTime} - {classData.endTime}
            </Text>
            <Text style={styles.faculty}>{classData.faculty}</Text>
            <Text style={styles.room}>{classData.room}</Text>
            <Text style={styles.attendance}>{classData.attendance}</Text>
          </View>
        ))
      ) : (
        <Text>No classes found</Text>
      )}
    </View>
  );
};

export default Todaytimetable;