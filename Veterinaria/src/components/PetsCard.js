import React from 'react';
import {View, Text, Image} from 'react-native'
import { Button } from 'react-native';
import styles from '../styles/globalStyles';
import AppoinmentPets from './AppoinmentPets';

const PetsCard = ({pet})=>{
    return(
        <View style={styles.card}>
            <Image source={{uri: pet.photo}} style={styles.photo}/>
            
            <Text style={styles.name}>Nombre Mascota: {pet.name}</Text>
            <Text >Raza: {pet.race}</Text>
            <Text >Tipo: {pet.type}</Text>
            <Text >Edad: {pet.age}</Text>
            <Text >Propietario: {pet.person}</Text>
            <Text >Veterinario: {pet.vet}</Text>

            <Button 
                   title='Agendar cita' 
                   style={styles.button}
                   onPress={()=>{<AppoinmentPets/>}}/>
        </View>
    );
};

export default PetsCard;

