import { getStudentTimetable } from "../controllers/functions";
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Todaytimetable = () => {
    
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const timetableData = await getStudentTimetable();
        setData(timetableData);
        console.log(timetableData)
      } catch (error) {
        console.log('Error fetching timetable:', error);
      }
    };

    fetchTimetable();
  }, []);

  return (
<View>
  {data.classes && data.classes.length > 0 ? (
    data.classes.map((classData) => (
      <View style={styles.classContainer}>
        <Text style={styles.courseCode}>{classData.course.code}</Text>
        <Text style={styles.courseName}>{classData.course.name}</Text>
        <Text style={styles.time}>{classData.startTime} - {classData.endTime}</Text>
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


  const styles = {
    classContainer: {
        flex: 5,
        width: 200,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginbottom: 10,
    },
    courseCode: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    courseName: {
      fontSize: 14,
      marginTop: 5,
    },
    time: {
      fontSize: 12,
      marginTop: 5,
    },
    faculty: {
      fontSize: 12,
      marginTop: 5,
    },
    room: {
      fontSize: 12,
      marginTop: 5,
    },
    attendance: {
      fontSize: 12,
      marginTop: 5,
    },
};

export default Todaytimetable;
