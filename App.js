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
  Pressable,
} from "react-native";
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 250,
          }}
          source={require("./img/360_F_492245515_B06u4GqjtSox45R7iDOCLIamWIJipzFT.jpg")}
        />
        <TextInput placeholder="Ismingi" style={styles.Input} />
        <TextInput placeholder="Familiyangiz" style={styles.Input} />
        <TextInput
          placeholder="Parolingiz"
          secureTextEntry={true}
          style={styles.Input}
        />
        <Button
          // color="#005BAA"
          onPress={() =>
            Alert.alert("salom", "asd", [
              { text: "OK", onPress: () => console.log("OK") },
              { text: "Yoq", onPress: () => console.log("YOQ") },
            ])
          }
          style={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Input: {
    width: "90%",
    height: 50,
    borderWidth: 2,
    borderColor: "#005BAA",
    marginTop: 20,
    borderRadius: 5,
    paddingLeft: 10,
  },
  contain: {
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
