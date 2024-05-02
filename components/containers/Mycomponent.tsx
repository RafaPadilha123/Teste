import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MyComponent() {
  const { showActionSheetWithOptions } = useActionSheet();

  const options = ["Delete", "Save", "Cancel"];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 2;

  const handleOpenActionSheet = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        console.log("Selected: ", buttonIndex);
      }
    );
  };

  return (
    <View>
      <Ionicons
        name="menu"
        size={32}
        onPress={handleOpenActionSheet}
      />
    </View>
  );
}
