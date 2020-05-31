import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import FurnitureListScreen from "../screens/FurnitureListScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FurnitureDetailsScreen from "../screens/FurnitureDetailsScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleAlign: "center",
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const FurnitureStackNavigator = createStackNavigator(
  {
    FurnitureList: { screen: FurnitureListScreen },
    FurnitureDetails: { screen: FurnitureDetailsScreen },
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: { headerTitle: "Home Screen" },
  },
  FurnitureList: {
    screen: FurnitureStackNavigator,
    navigationOptions: { drawerLabel: "Furniture List" },
  },
}, {contentOptions: {
  activeTintColor: Colors.primary
}});

export default createAppContainer(DrawerNavigator);
