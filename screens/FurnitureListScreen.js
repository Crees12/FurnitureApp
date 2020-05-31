import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyHeaderButton from "../components/MyHeaderButton";
import { useSelector } from "react-redux";
import FurnitureItem from "../components/FurnitureItem";
import Colors from "../constants/Colors";

const FurnitureListScreen = (props) => {
  const furnitures = useSelector((state) => state.furniture.furnitures);

  return (
    <View>
      <FlatList
        data={furnitures}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <FurnitureItem
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            id= {itemData.item.id}
            gotoDetails={() =>
              props.navigation.navigate({
                routeName: "FurnitureDetails",
                params: {
                  furnitureId: itemData.item.id,
                  furnitureTitle: itemData.item.title,
                },
              })
            }
            onSelect={() =>
              props.navigation.navigate({
                routeName: "Home",
                params: {
                  furnitureId: itemData.item.id,
                },
              })
            }
          ></FurnitureItem>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

FurnitureListScreen.navigationOptions = (navData) => {
  return {
    title: "Furniture List",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FurnitureListScreen;
