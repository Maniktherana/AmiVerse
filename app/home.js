import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants/styles";
import { ScrollView } from "react-native-gesture-handler";
import Username from "../components/Username";
import { PaperProvider } from "react-native-paper";
import { Link } from "expo-router";

const Home = () => {
  return (
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Username></Username>
          <Link href="/settings">Settings</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
