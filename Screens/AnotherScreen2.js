import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const AnotherScreen2 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Another Screen 2</Text>
        </View>
    )
}

export default AnotherScreen2

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});