import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import Colors from "../constants/Colors";

const FurnitureItemDetails = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }}></Image>
        </View>
        <View style={styles.bottom}>
          <View>
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text>Details like height and width</Text>
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
    borderRightWidth: 2,
    borderLeftWidth: 2,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  card: {
    marginTop: "10%",
    height: 250,
    borderColor: Colors.primary,
    borderRadius: 0,
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
  image: {
    width: "100%",
    height: "100%",
  },
});

export default FurnitureItemDetails;
