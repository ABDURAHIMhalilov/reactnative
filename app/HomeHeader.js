// // import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableNativeFeedback,
//   Image,
//   Button,
//   Alert,
//   Platform,
//   StatusBar,
// } from "react-native";

// // TouchableOpacity -> bosilganda opacity
// // TouchableWithoutFeedback -> oddiy click
// // TouchableHighlight -> bosilganda qoraro
// // TouchableHighlight -> standart bosilish

// // export default function App() {
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <Text>asddddddddddddddddddddddddasd!sfdddddddd</Text>
// //       <Button
// //         color="dodgerblue"
// //         title="Click me"
// //         onPress={() => alert("o my god")}
// //       />
// //       <TouchableNativeFeedback
// //       // onPress={() =>
// //       //   // Alert.alert("o my god", "o my god2", [
// //       //   //   { text: "YES", onPress: () => console.log("YES") },
// //       //   //   { text: "NO", onPress: () => console.log("NO") },
// //       //   // ])

// //       //   // Alert.prompt("message1", "message2", (text) => console.log(text)) -> androidda ishlamidi
// //       //   // Alert.prompt("message1", "message2", (text) => console.log(text))
// //       // }
// //       >
// //         <View
// //           style={{ width: 350, height: 100, backgroundColor: "red" }}
// //         ></View>
// //         {/* <Image
// //           // blurRadius={10}
// //           // fadeDuration={1000}
// //           source={{
// //             width: 200,
// //             height: 300,
// //             uri: "https://picsum.photos/200/300",
// //           }}
// //         /> */}
// //       </TouchableNativeFeedback>
// //       {/* <StatusBar style="auto" /> */}
// //     </SafeAreaView>
// //   );
// // }

// export default function HomePage() {
//   return (
//     <SafeAreaView>
//       <View style={styles.scrollBar}>
//         <Text>home</Text>
//         <Text>home</Text>
//         <Text>home</Text>
//       </View>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollBar: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     position: "absolute",
//     width: "100%",
//     // height: "100vh",
//     alignItems: "flex-end",
//     bottom: 20,
//     backgroundColor: "red",
//     color: "black",
//   },
// });

import { View } from "react-native";
const HomeHeader = () => {
  return (
    <View>
      <Text>HomeHeader</Text>
    </View>
  );
};

export default HomeHeader;
