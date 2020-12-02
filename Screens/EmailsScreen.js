import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const EmailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Email Screen</Text>
        </View>
    )
}

export default EmailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});