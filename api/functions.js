import axios from "axios";

let username = ""; // enter your amizone username
let password = ""; // enter your amizone password
let ngrokURL = "";

export async function getStudentTimetable() {
  try {
    const response = await axios.get(
      `${ngrokURL}/classSchedule?username=${username}&password=${password}`
    );
    return response.data;
  } catch (error) {
    // console.error("Error fetching student timetable:", error);
    throw error;
  }
}

export async function getStudentProfile() {
  try {
    let Url = `${ngrokURL}/userProfile?username=${username}&password=${password}`;
    const data = await axios.get(Url);
    // console.log("Get student profile: ", data);
    return data;
  } catch (err) {
    // console.log("error at getStudentProfile", err);
  }
}
