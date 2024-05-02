import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface HeaderProps {
  title: string;
  onSandwichPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSandwichPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity onPress={onSandwichPress}>
        <Text style={styles.sandwich}>☰</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sandwich: {
    fontSize: 24,
  },
});

export default Header;
