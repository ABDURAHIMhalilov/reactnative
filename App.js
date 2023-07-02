import { View, Text } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigation } from "@react-navigation/bottom-tabs";
import HomePage from "./app/HomeHeader";
import SearchScreen from "./app/SearchScreen";

const App = () => {
  const Tab = createBottomTabNavigation();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Search" component={SearchScreen} />
        {/* <Tab.Screen name="Notification" component={HomePage} /> */}
        {/* <Tab.Screen name="Profile" component={HomePage} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
