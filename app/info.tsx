import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

const Info: React.FC = () => {
  const handleLogout = () => {
    router.push("./"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>MEU APP</Text>
        <Text>versão 1.0</Text>
        <Text>Desenvolvido por</Text>
        <Text>RAFAEL RODRIGUES PADILHA</Text>
      </View>
      <TouchableOpacity style={styles.footer} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    paddingBottom: 20,
  },
  logoutText: {
    fontSize: 18,
    color: "red",
  },
});

export default Info;
