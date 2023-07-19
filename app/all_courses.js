import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";
// import Username from "../components/Username";
import { styles } from "../styles/username";
import AllCoursesCard from "../components/AllCoursesCard";
import axios from "axios";
import { ngrokURL } from "../constants/config";

const Courses = () => {
  const [secUsername, setUsername] = useState("");
  const [secPassword, setPassword] = useState("");
  const [data, setData] = useState([]);
  // const [semesters, setSemesters] = useState([]);
  const [currentSemester, setCurrentSemester] = useState("");

  // read data from local encrypted storage
  const retrieveData = async () => {
    try {
      const storedUsername = await SecureStore.getItemAsync("username");
      const storedPassword = await SecureStore.getItemAsync("password");

      if (storedUsername && storedPassword) {
        setUsername(storedUsername);
        setPassword(storedPassword);

        // console.log("stored username is ", storedUsername);
      }
    } catch (error) {
      console.error("Error retrieving data from SecureStore:", error);
    }
  };

  async function getCurrentSemester() {
    const res = await axios.get(
      `${ngrokURL}/semesters?username=${secUsername}&password=${secPassword}`
    );
    // setSemesters(res.data.semesters);
    // console.log("current sem is:", semesters[0].name);
    return res.data.semesters[0].name;
    // console.log(res.data.semesters[0].ref);
    // console.log("current sem is:", semesters[0].name);
  }

  async function getAllCourses() {
    const res = await axios.get(
      `${ngrokURL}/courses?username=${secUsername}&password=${secPassword}&semester=${currentSemester}`
    );
    // res.data.courses.map((course) =>
    //   console.log(course.ref.name, course.ref.code)
    // );
    return res.data.courses;
  }

  useEffect(() => {
    retrieveData().then(() => {
      getCurrentSemester().then((s) => {
        console.log(s);
        setCurrentSemester(s);
      });

      getAllCourses().then((courses) => {
        setData(courses);
        console.log("courses:", courses); // Move the logging here
      });
    });
  }, [secPassword, secUsername, currentSemester]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.hello}>All courses page!</Text>
        <View>
          {data ? (
            data.map((course, index) => (
              <AllCoursesCard key={index} course={course} />
            ))
          ) : (
            <Text>No courses </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Courses;