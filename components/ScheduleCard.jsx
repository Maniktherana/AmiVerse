import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Timetable";

const ScheduleCard = (data) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <TouchableOpacity onPress={() => toggleExpansion()}>
      <View>
        <View
          style={
            isExpanded ? styles.expandedClassContainer : styles.classContainer
          }
        >
          <Text style={styles.courseCode}>{data.data.course.code}</Text>
          <Text style={styles.courseName}>{data.data.course.name}</Text>
          <Text style={styles.time}>
            {data.data.startTime} - {data.data.endTime}
          </Text>
          <Text style={styles.faculty}>Taught by : {data.data.faculty}</Text>
          <Text style={styles.room}>Classroom : {data.data.room}</Text>
          <Text style={styles.attendance}>
            Attendance : {data.data.attendance}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleCard;
