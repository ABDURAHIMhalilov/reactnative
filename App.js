import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
// import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigation } from "@react-navigation/bottom-tabs";
import HomePage from "./app/HomeHeader";
import SearchScreen from "./app/SearchScreen";
import { Button } from "react-native-web";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/icon.png")} />
        <center>
        <Text>hello wolrd</Text>
        </center>
        <Button title='salom' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    margin: "auto",
    height: "200px",
    backgroundColor: "red",
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 'auto'
  },
});
