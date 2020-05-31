import React from "react";
import FurnitureNavigator from "./navigation/FurnitureNavigator";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import furnitureReducer from "./store/reducer";

enableScreens();

const rootReducer = combineReducers({
  furniture: furnitureReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <FurnitureNavigator></FurnitureNavigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
