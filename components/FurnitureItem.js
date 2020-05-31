import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as FurnitureActions from "../store/action";


const FurnitureItem = (props) => {
  const dispatch = useDispatch();

  const itemSelectedHandler = () => {};
  //console.log(props);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        console.log(props.id)
        dispatch(FurnitureActions.getSelected(props.id))
        props.onSelect();
        
      }}
    >
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.backgroundimage}
            source={{
              uri:
                "https://image.freepik.com/free-photo/empty-room-interior-white-blank-wall-3d-render_43963-49.jpg",
            }}
          >
            <Image
              style={styles.image}
              source={{ uri: props.imageUrl }}
            ></Image>
          </ImageBackground>
        </View>
        <View style={styles.bottom}>
          <View>
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={{ borderRadius: 10, overflow: "hidden" }}
              color={Colors.primary}
              onPress={props.gotoDetails}
              title="Details"
            ></Button>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    width: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  card: {
    borderColor: Colors.primary,
    borderRadius: 10,
    borderBottomWidth: 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginBottom: 20,
  },
  title: {
    marginTop: 5,
    color: "black",
    fontSize: 23,
  },
  imageContainer: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",

    height: 275,
  },
  backgroundimage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    width: "100%",
    height: 275,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: 130,
    width: "65%",
    height: "65%",
  },
});

export default FurnitureItem;
