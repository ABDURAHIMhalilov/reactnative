import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableNativeFeedback,
  Image,
  Button,
  Alert,
} from "react-native";

// TouchableOpacity -> bosilganda opacity
// TouchableWithoutFeedback -> oddiy click
// TouchableHighlight -> bosilganda qoraro
// TouchableHighlight -> standart bosilish

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>asddddddddddddddddddddddddasd!sfdddddddd</Text>
      <Button
        color="dodgerblue"
        title="Click me"
        onPress={() => alert("o my god")}
      />
      <TouchableNativeFeedback
        onPress={() =>
          Alert.alert("o my god", "o my god2", [
            { text: "YES" },
            { text: "NO" },
          ])
        }
      >
        <View
          style={{ width: 350, height: 100, backgroundColor: "red" }}
        ></View>
        {/* <Image
          // blurRadius={10}
          // fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
      </TouchableNativeFeedback>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
