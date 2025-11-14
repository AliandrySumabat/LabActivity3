import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim().length === 0) return;

    setList([...list, { id: Date.now().toString(), value: item }]);
    setItem('');   // clear TextInput after adding
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Item List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Item"
        value={item}
        onChangeText={setItem}
      />

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>• {item.value}</Text>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: "#F9F9F9",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "white"
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: '600'
  },
  listItem: {
    fontSize: 18,
    paddingVertical: 6,
  },
});
