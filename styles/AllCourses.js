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
    //backgroundColor: "#9900ef",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 5,
  },
  courseCode: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  courseName: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },

  attendance: {
    color: "#fff",
    fontSize: 12,
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
