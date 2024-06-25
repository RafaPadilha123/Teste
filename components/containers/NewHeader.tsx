import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { router } from "expo-router";

export default function MyComponent() {
  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();

  const options = ["Sobre", "Logout", "Cancelar"];
  const destructiveButtonIndex = 1;
  const cancelButtonIndex = 2;

  const handleOpenActionSheet = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) { 
            router.push("/info");
        } else if (buttonIndex === 1) { 
            router.push("/");
        } else {
          console.log("Selected: ", buttonIndex);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.showroomText}>SHOWROOM</Text>
      <Ionicons
        name="menu"
        size={32}
        onPress={handleOpenActionSheet}
        style={styles.menuIcon}
        testID= "menu"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  showroomText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    marginLeft: 'auto', 
  },
});
