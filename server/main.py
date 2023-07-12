import logging
from typing import Union

from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from google.protobuf.json_format import MessageToJson


from controllers import rpc_calls

logger = logging.getLogger()

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://64.227.146.28",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/classSchedule")
async def get_class_schedule(username, password):
    print("Getting user profile", username, password)
    res = await rpc_calls.get_class_schedule(username, password)
    json_data= MessageToJson(res)
    return Response(content=json_data, media_type="application/json")

@app.get("/userProfile")
async def get_user_profile(username, password):
    print("Getting user profile", username, password)
    res = await rpc_calls.get_user_profile(username, password)
    json_data= MessageToJson(res)
    return Response(content=json_data, media_type="application/json")

@app.get("/currentCourses")
async def get_current_course(username, password):
    print("Getting user profile", username, password)
    res = await rpc_calls.get_current_course(username, password)
    json_data= MessageToJson(res)
    return Response(content=json_data, media_type="application/json")

@app.get("/attendance")
async def get_attendance(username, password):
    print("Getting user profile", username, password)
    res = await rpc_calls.get_attendance(username, password)
    json_data= MessageToJson(res)
    return Response(content=json_data, media_type="application/json")

@app.get("/examSchedule")
async def get_exam_schedule(username, password):
    print("Getting user profile", username, password)
    res = await rpc_calls.get_exam_schedule(username, password)
    json_data= MessageToJson(res)
    return Response(content=json_data, media_type="application/json")

@app.get("/wifiInfo")
async def get_wifi_info(username, password):
    print("Getting user profile", username, password)
    res = await rpc_calls.get_wifi_info(username, password)
    json_data= MessageToJson(res)
    return Response(content=json_data, media_type="application/json")



