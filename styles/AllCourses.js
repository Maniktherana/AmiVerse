import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#0B0B0B",
    marginHorizontal: 6,
    padding: 10,
  },
  classContainer: {
    flex: 5,
    width: 370,
    height: 150,
    backgroundColor: "#618264",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 5,
  },
  courseCode: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
  },
  courseName: {
    color: "#6C6665",
    fontSize: 18,
    marginTop: 5,
  },

  attendance: {
    color: "#000000",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "500",
  },
  expandedClassContainer: {
    flex: 5,
    width: 370,
    height: 120,
    backgroundColor: "teal",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 5,
  },
});
