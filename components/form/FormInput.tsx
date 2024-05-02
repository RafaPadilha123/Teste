import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React from "react";

type FormInput = {
  label?: string;
} & TextInputProps;

export default function FormInput({ label, ...rest }: FormInput) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50, 
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  label: {
    fontWeight: "bold",
  },
});
