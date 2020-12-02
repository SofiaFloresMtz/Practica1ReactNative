import React from 'react'
import { StyleSheet, Text, View, Button,ToastAndroid } from 'react-native'

const VideoScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Video Screen</Text>
            <Button 
                title="Da clic" 
                onPress={()=>{ToastAndroid.show("Usaste Toast:)", ToastAndroid.SHORT);}}
            />
        </View>
    )
}

export default VideoScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});