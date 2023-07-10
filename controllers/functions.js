import axios from "axios";

let username = "";
let password = "";


export async function getStudentProfile() {
    let baseUrl = "http://localhost:3000/api/v1/user_profile";
    
  
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

export async function getStudentTimetable() {
    let baseUrl = `http://localhost:3000/api/v1/class_schedule/2023/07/10`
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


