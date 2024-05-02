import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SectionList, TouchableOpacity } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Ionicons } from '@expo/vector-icons'; 
import SearchInput from '../components/containers/SearchInput';
import MyComponent from '../components/containers/Mycomponent';
import carData from '../data';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<Car[]>([]);

  useEffect(() => {
    const filtered = carData.filter(
      (car: Car) =>
        car.brand.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search]);


  const sortedData = filteredData.sort((a, b) => a.brand.localeCompare(b.brand));

  return (
    <View style={styles.container}>
      <MyComponent />
      <SearchInput value={search} onChangeText={setSearch} />
      <SectionList
        sections={[{ title: 'All Cars', data: sortedData }]}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.brand} {item.model}
            </Text>
            <Text>Year: {item.year}</Text>
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  item: {
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  sandwichButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default App;
