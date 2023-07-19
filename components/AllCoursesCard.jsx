import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/AllCourses";
import ProgressBar from "react-native-progress/Bar";

const AllCoursesCard = (props) => {
  //   const [isExpanded, setIsExpanded] = useState(false);

  //   const toggleExpansion = () => {
  //     setIsExpanded((prev) => !prev);
  //   };

  // if (!course || !course.ref) {
  //   return <Text>No course data available</Text>;
  // }

  const [attendance, setAttendance] = useState(0);

  // Calculate attendance once after the initial render or when attendance data changes
  useEffect(() => {
    const attended = props.course.attendance.attended;
    const held = props.course.attendance.held;

    // Check if denominator (held) is non-zero and not undefined to avoid errors
    const calculatedAttendance =
      held !== undefined && held !== 0 ? attended / held : 0;
    // Object.keys(props.course.attendance).length > 0 ? attended / held : 0;

    setAttendance(calculatedAttendance);
  }, [props.course.attendance.attended, props.course.attendance.held]);

  console.log("attendance is ", attendance);

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.classContainer}>
          <Text style={styles.courseCode}>{props.course.ref.code}</Text>
          <Text style={styles.courseName}>{props.course.ref.name}</Text>
          <Text style={styles.attendance}>
            Attendance : {(attendance * 100).toFixed(2)}%
          </Text>
          <View>
            <ProgressBar progress={attendance} width={200} />
          </View>
          {/* <Text style={styles.time}>
            {data.data.startTime} - {data.data.endTime}
          </Text> */}
          {/* <Text style={styles.faculty}>Taught by : {data.data.faculty}</Text> */}
          {/* <Text style={styles.room}>Classroom : {data.data.room}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AllCoursesCard;
