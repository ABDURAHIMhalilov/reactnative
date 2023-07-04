import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigation } from "@react-navigation/bottom-tabs";
import HomePage from "./app/HomeHeader";
import SearchScreen from "./app/SearchScreen";
import { Button, TextInput } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.contain}>
        <Button
        
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contain: {
    width: 500,
    height: 500,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
