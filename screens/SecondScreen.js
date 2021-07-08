import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SecondScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is the second screen</Text>
        </View>
    )
}

export default SecondScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
