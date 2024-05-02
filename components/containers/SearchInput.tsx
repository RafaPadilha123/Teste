import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default SearchInput;
