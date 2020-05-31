import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyHeaderButton from "../components/MyHeaderButton";
import { DrawerActions } from "react-navigation-drawer";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { useSelector } from "react-redux";

const HomeScreen = (props) => {
  const logo =
    "https://i.pinimg.com/564x/19/00/d5/1900d5814c81efd496d4066b27ca65d2.jpg";
  const [pickedImage, setPickedImage] = useState();
  if (pickedImage === undefined) {
    setPickedImage(logo);
  }

  const selectedFurniture = useSelector(
    (state) => state.furniture.selectedFurniture
  );
  console.log(selectedFurniture);

  const getPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== "granted") {
      Alert.alert(
        "Access denied!",
        "You need to grant permissions to use this app",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await getPermission();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,

      quality: 1,
    });
    //console.log(image);
    setPickedImage(image.uri);
    //props.onImageTaken(image.uri);
  };
  let screen = (
    <ImageBackground source={{ uri: pickedImage }} style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={takeImageHandler}
          activeOpacity={0.7}
          style={styles.circle}
        >
          <View style={styles.innerCircle}></View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  if (selectedFurniture !== null && pickedImage !== logo) {
    screen = (
      <ImageBackground source={{ uri: pickedImage }} style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          
          
          <Image
            source={{ uri: selectedFurniture.imageUrl }}
            style={styles.furnitureImage}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={takeImageHandler}
            activeOpacity={0.7}
            style={styles.circle}
          >
            <View style={styles.innerCircle}></View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  return <View style={styles.gridItem}>{screen}</View>;
};

const styles = StyleSheet.create({
  buttons: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    backgroundColor: "white",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,

    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  furnitureImage: {
    
    width: 300,
    height: 250,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
  },
  container: {
    flex: 1,

    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "black",
  },
});

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Home",
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

export default HomeScreen;
