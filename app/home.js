// import { View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import Username from "../components/Username";
// import Todaytimetable from "../components/timetable";
// import { useNavigation } from "@react-navigation/native";
// import { useLayoutEffect } from "react";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// const Tab = createMaterialBottomTabNavigator();

// const Home = () => {
//   const navigation = useNavigation();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//   }, []);

//   return (
//     <>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View>
//           <Username />
//           <Todaytimetable />
//         </View>
//       </ScrollView>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//       </Tab.Navigator>
//     </>
//   );
// };

// export default Home;

import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Username from "../components/Username";
import Todaytimetable from "../components/timetable";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Courses from "./all_courses";

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    // </Tab.Navigator>

    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: "transparent" }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarLabel: "Home",
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
      {/*<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
