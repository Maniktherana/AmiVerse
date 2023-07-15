import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  FlatList,
  Button,
} from "react-native";
import { styles } from "../styles/Timetable";

function SchCard(data) {
  console.log("Classdata", data);

  const [isExpanded, setIsExpanded] = useState(false);
  function toggleExpansion(setIsExpanded, isExpanded) {
    if (isExpanded == true) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }

  if (isExpanded == false)
    return (
      <View>
        {/* <TouchableOpacity
          onPress={console.log("pressed", data.data.course.name)}
        > */}
        <View style={styles.classContainer}>
          <Text style={styles.courseCode}>{data.data.course.code}</Text>
          <Text style={styles.courseName}>{data.data.course.name}</Text>
          <Text style={styles.time}>
            {data.data.startTime} - {data.data.endTime}
          </Text>
          <Button onPress={toggleExpansion(setIsExpanded, isExpanded)}>
            expand
          </Button>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    );
  else
    return (
      <View>
        <View style={styles.classContainer}>
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
          <Button onPress={toggleExpansion(setIsExpanded, isExpanded)}>
            expand
          </Button>
        </View>
      </View>
    );
}

export default SchCard;
