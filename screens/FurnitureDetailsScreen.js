import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import FurnitureItemDetails from "../components/FurnitureItemDetails";

const FurnitureDetailsScreen = (props) => {
  const furnitureId = props.navigation.getParam("furnitureId");
  const selectedFurniture = useSelector((state) =>
    state.furniture.furnitures.find((item) => item.id === furnitureId)
  );

  console.log(selectedFurniture);

  return (
    <FurnitureItemDetails
      title={selectedFurniture.title}
      imageUrl={selectedFurniture.imageUrl}
    ></FurnitureItemDetails>
  );
};

const styles = StyleSheet.create({});

FurnitureDetailsScreen.navigationOptions = (navData) => {
  const title = navData.navigation.getParam("furnitureTitle");
  return { headerTitle: title };
};

export default FurnitureDetailsScreen;
