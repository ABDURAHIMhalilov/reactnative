import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Button,
  TextInput,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
// import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigation } from "@react-navigation/bottom-tabs";
import HomePage from "./app/HomeHeader";
import SearchScreen from "./app/SearchScreen";

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.contain}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
