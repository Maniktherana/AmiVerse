import axios from "axios";

let username = "9109986"; // enter your amizone username
let password = "8269dc"; // enter your amizone password
let ngrokURL =
  "https://140a-2401-4900-1c8a-c946-44b0-83ed-6372-ef40.ngrok-free.app";

// fetching the student's profile
export async function getStudentProfile() {
  let baseUrl = `${ngrokURL}/api/v1/user_profile`;

  let response = await axios.post(
    baseUrl,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      auth: {
        username,
        password,
      },
    }
  );
  return response.data;
}

// fetching the current day's timetable
export async function getStudentTimetable() {
  // get current date
  let year = new Date().getFullYear();
  let month =
    new Date().getMonth() + 1
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1; // if month is single digit add 0 before it
  let day = new Date().getDate();

  let baseUrl = `${ngrokURL}/api/v1/class_schedule/${year}/${parseInt(month)}/${
    day - 1
  }`;
  let response = await axios.post(
    baseUrl,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      auth: {
        username,
        password,
      },
    }
  );
  return response.data;
}
