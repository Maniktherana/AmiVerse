import { View, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Username from "../components/Username";
import Todaytimetable from "../components/timetable";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
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
