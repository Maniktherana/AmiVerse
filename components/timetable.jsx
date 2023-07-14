import { getStudentTimetable } from "../api/functions";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Timetable";
import { atob, btoa } from "base-64";

const Todaytimetable = () => {
  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);

  const press = () => setExpanded(true);

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

  if (expanded == false)
    return (
      // <TouchableOpacity>

      <View>
        {data.classes && data.classes.length > 0 ? (
          data.classes.map((classData, index) => (
            <TouchableOpacity onPress={press}>
              <View style={styles.classContainer} key={index}>
                <Text style={styles.courseCode}>{classData.course.code}</Text>
                <Text style={styles.courseName}>{classData.course.name}</Text>
                <Text style={styles.time}>
                  {classData.startTime} - {classData.endTime}
                </Text>
                {/* format time */}
                <Text style={styles.faculty}>
                  Taught by : {classData.faculty}
                </Text>
                <Text style={styles.room}>Classroom : {classData.room}</Text>
                <Text style={styles.attendance}>
                  Attendance : {classData.attendance}
                </Text>
                {/* {  classData.attendance } */}
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No classes found</Text>
        )}
      </View>
    );
  else setExpanded == true;
  return <View></View>;
};

export default Todaytimetable;
