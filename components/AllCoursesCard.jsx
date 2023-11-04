import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/AllCourses";
import ProgressBar from "react-native-progress/Bar";
import { LinearGradient } from 'expo-linear-gradient';

const AllCoursesCard = (props) => {
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
        <LinearGradient
        colors={["rgb(2,170,189) ","rgb(0,205,172)"]}
        start={{ x: 0, y: 0.5}}
        end={{ x: 1, y: 0.5 }}
        locations={[0,1]}
        style={styles.classContainer} 
        >
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
        </LinearGradient>
      </View>
      
    </TouchableOpacity>
  );
};

export default AllCoursesCard;
