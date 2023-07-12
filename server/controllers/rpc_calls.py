import gen.amizone_pb2 as pb
from util.stub import stubber
from datetime import date
from google.type import date_pb2 as _date_pb2
import logging

logger = logging.getLogger()



async def get_user_profile(username, password):
    logger.info("Getting user profile")

    stub, metadata, channel = stubber(username, password)

    try:
        logger.info("Getting user profile via grpc")
        response = await stub.GetUserProfile(pb.EmptyMessage(), metadata=metadata)
        return response
    except Exception as e:
        print(e.with_traceback(e.__traceback__))
        return None
    finally:
        channel.close()


async def get_class_schedule(username, password: int) -> pb.ScheduledClasses | None:
    stub, metadata, channel = stubber(username, password)

    today = date.today()
    val = _date_pb2.Date(year=today.year, month=today.month, day=4)

    try:
        logger.info("Getting class schedule via grpc")
        response = await stub.GetClassSchedule(
            pb.ClassScheduleRequest(date=val), metadata=metadata
        )
        return response
    except Exception as e:
        print(e.with_traceback(e.__traceback__))
        return None
    finally:
        await channel.close()


async def get_current_course(username, password: int) -> pb.Courses | None:
    stub, metadata, channel = stubber(username, password)
    try:
        logger.info("Getting current course via grpc")
        response = await stub.GetCurrentCourses(pb.EmptyMessage(), metadata=metadata)
        return response
    except Exception as e:
        return None
    finally:
        await channel.close()


async def get_attendance(username, password: int) -> pb.AttendanceRecords | None:
    stub, metadata, channel = stubber(username, password)
    try:
        logger.info("Getting attendance via grpc")
        response = await stub.GetAttendance(pb.EmptyMessage(), metadata=metadata)
        return response
    except Exception as e:
        print(e)
        return None
    finally:
        await channel.close()


async def get_exam_schedule(username, password) -> pb.ExaminationSchedule | None:
    stub, metadata, channel = stubber(username, password)
    try:
        logger.info("Getting exam schedule via grpc")
        response = await stub.GetExamSchedule(pb.EmptyMessage(), metadata=metadata)
        return response
    except Exception as e:
        print(e)
        return None
    finally:
        await channel.close()


async def fill_faculty_feedback(
    username, password, rating, query_rating, comment
) -> pb.FillFacultyFeedbackRequest | None:
    stub, metadata, channel = stubber(username, password)
    try:
        logger.info("Filling faculty feedback via grpc")
        response = await stub.FillFacultyFeedback(
            pb.FillFacultyFeedbackRequest(
                rating=rating, query_rating=query_rating, comment=comment
            ),
            metadata=metadata,
        )
        return response
    except Exception as e:
        print(e)
        return None
    finally:
        await channel.close()


async def get_wifi_info(username, password) -> pb.WifiMacInfo | None:
    stub, metadata, channel = stubber(username, password)

    try:
        response = await stub.GetWifiMacInfo(
            pb.EmptyMessage(),
            metadata=metadata,
        )
        return response
    except Exception as e:
        logger.warning(f"From get_wifi_info: {e}")
        return None
    finally:
        await channel.close()


async def register_wifi(
    username, password, mac_address, override_limit
) -> pb.RegisterWifiMacRequest | None:
    stub, metadata, channel = stubber(username, password)
    try:
        response = await stub.RegisterWifiMac(
            pb.RegisterWifiMacRequest(
                address=mac_address, override_limit=override_limit
            ),
            metadata=metadata,
        )
        return response
    except Exception as e:
        logger.warning(f"From register_wifi: {e}")
        return None
    finally:
        await channel.close()
