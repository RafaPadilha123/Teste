import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {
  title: string;
  imageSource: any; 
} & TouchableOpacityProps;

export default function FormButton({ title, imageSource, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.buttonContent}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "red",
    borderRadius: 9,
    padding: -15,
    width: 100,
    height: 45,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 3,
    marginLeft:-30,
    width: 50, 
    height: 50, 
    marginRight: -7,
  },
  title: {
    marginLeft: -10,
    fontWeight: "bold",
  },
});
