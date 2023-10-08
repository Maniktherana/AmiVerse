import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { styles } from "../styles/AllCourses";
import ProgressBar from "react-native-progress/Bar";
import all_courses from "../app/all_courses.js";

const App = () => {
  const courseColors = ["#9900ef", "teal", "orange", "#FF5733", "#00CC66", "#FFD700"];

  return (
    <SafeAreaView>
      <Text style={styles.hello}>All courses page!</Text>
      <ScrollView>
        <all_courses courseColors={courseColors} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;