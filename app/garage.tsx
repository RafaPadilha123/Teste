import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';
import SearchInput from '../components/containers/SearchInput';
import NewHeader from '../components/containers/NewHeader';
import carData from '../data';

import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';


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
    <ActionSheetProvider>
    <View style={styles.container} testID="garagePage">
      <View style={styles.headerContainer}>
        <NewHeader />
      </View>
      <SearchInput value={search} onChangeText={setSearch} />
      <SectionList
        sections={[{ title: 'All Cars', data: sortedData }]}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              Marca: {item.brand} 
            </Text>
            <Text>
              Modelo: {item.model} 
            </Text>
            <Text>Ano: {item.year}</Text>
          </View>

        )}
        keyExtractor={(item, index) => String(index)}
      />
      <Stack.Screen options={{ headerShown: false }} />
    </View>
    </ActionSheetProvider>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 20,
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
});

const ConnectedApp = connectActionSheet(App)

export default ConnectedApp;
