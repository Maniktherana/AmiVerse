import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import Username from "../components/Username";
import Todaytimetable from "../components/timetable";
import { useNavigation } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Courses from "./all_courses";


const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Username />
        <Todaytimetable />
      </View>
    </ScrollView>
  );
};

// bottom tabs
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3f37c9"
      barStyle={{ 
        backgroundColor: "#f0edf6",
        height: 60,
        //position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 10
      
      }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "TimeTable",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: "Courses",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;