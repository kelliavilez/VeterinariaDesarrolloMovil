import React from 'react'
import {View, Text, Button} from 'react-native'
import styles from '../styles/globalStyles'

const AppoinmentPets = () => {
    return(
        <View>
            <View>
            <Text style={styles.title}>Appoinment</Text>
        </View>
        <View>
            <Text style={styles.subtitle}>Date: </Text>
            <Text style={styles.subtitle}>Hour: </Text>
            <Text style={styles.subtitle}>Place: </Text>
            <Text style={styles.subtitle}>History: </Text>
            <Button 
                  title='save'
                  /*onPress={()=>{<AppoinmentPets/>}}*/
                  onPress={()=> functionSave()}/>
        </View>
        </View>
    );
};

export default AppoinmentPets;