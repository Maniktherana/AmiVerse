import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    marginHorizontal: 6,
    padding: 10,
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },

  classContainer: {
    flex: 5,
    width: 370,
    height: 150,
    //backgroundColor: "#6ede8a",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  courseCode: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
  },
  courseName: {
    color: "#000000",
    fontSize: 18,
    marginTop: 5,
    //fontWeight: "semibold",
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