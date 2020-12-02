import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Image} from 'react-native';
import logo from '../Imagenes/logo.svg';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>Sorry profe sin imagen:(</Text>
            <Button 
                title="Imagen" 
                onPress={()=>navigation.navigate('DetailsScreen')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
});