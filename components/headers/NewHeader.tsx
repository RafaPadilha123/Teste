import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';

interface HeaderProps {
  onPressMenu: () => void;
}

const NewHeader: React.FC<HeaderProps> = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const handleMenuPress = () => {
    showActionSheetWithOptions(
      {
        options: ['Sobre', 'Logout', 'Cancelar'],
        cancelButtonIndex: 2,
        title: 'Selecione uma opção'
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            console.log('Opção Sobre selecionada');
            break;
          case 1:
            console.log('Opção Logout selecionada');
            break;
          default:
            // Nenhuma ação necessária para o botão Cancelar
            break;
        }
      }
    );
  };

  return (
    <View style={styles.topContainer}>
      <Text style={styles.headerText}>NOVIDADES</Text>
      <TouchableOpacity onPress={handleMenuPress}>
        <Ionicons name="menu-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewHeader;
