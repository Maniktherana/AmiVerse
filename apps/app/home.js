import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import Username from "../components/Username";
import Todaytimetable from "../components/timetable";
import { PaperProvider } from "react-native-paper";
import { Link } from "expo-router";

const Home = () => {
  return (
    <>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.primary_dark,
            },
            headerShadowVisible: false,
            headerTitle: "Amiverse",
          }}
        />
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Username></Username>
          <Todaytimetable></Todaytimetable>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
