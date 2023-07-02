import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
// import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigation } from "@react-navigation/bottom-tabs";
import HomePage from "./app/HomeHeader";
import SearchScreen from "./app/SearchScreen";
import { Button, TextInput } from "react-native-web";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.Views}>
        <Image
          style={styles.image}
          source={require("./img/f6142e71f0c9b9752ffa99f20d7a00eeb73873cb581c44143c75d7c81a31aee0_600.webp")}
        />
        <Text style={styles.text}>Control Your Hydration Level</Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.buttonDiv}>
          <button style={styles.button}>Start</button>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Views: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#292929",
    paddingTop: "30px",
    textAlign: "center",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: "270px",
    // marginLeft: "0%",
  },
  input: {
    width: "90%",
    height: "40px",
    // marginLeft: "5%",
    border: "1px solid white",
    margin: 3,
    borderRadius: 5,
    color: "white",
    paddingLeft: 10,
  },
  text: {
    width: 300,
    color: "white",
    fontSize: 40,
  },
  button: {
    fontSize: 20,
    height: "40px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "white",
    border: "none",
  },
  buttonDiv: {
    width: "90%",
    height: "40px",
    backgroundColor: "white",
    border: "none",
    borderRadius: 10,
  },
});
