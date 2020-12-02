import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ContactScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Contact Screen</Text>
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});