import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PetsCard from './src/components/PetsCard';

const pets = [
  {
    id: 1,
    photo: 'https://www.shutterstock.com/image-photo/portrait-black-red-doberman-pinscher-600nw-2353421935.jpg',
    name: 'Firulais',
    race: 'Doberman',
    type: 'Canine',
    age: 2,
    person: 'Camila',
    vet: 'Luis Carlos'
  },
  {
    id: 2,
    photo: 'https://cdn.redcanina.es/wp-content/uploads/2019/02/12102930/golden-cachorro-e1549967733842-1024x650.jpg',
    name: 'Pacho',
    race: 'Golden',
    type: 'Canine',
    age: 2,
    person: 'Andres',
    vet: 'Luis Carlos'
  }];

const App = ()=>{
  return(
    <View>
      <Text>App Veterinaria</Text>
      <FlatList
      data={pets}
      renderItem={({item})=> <PetsCard pet={item}/>}
      keyExtractor={(item)=>item.id.toString()}
      />
    </View>
  );
};

export default App;