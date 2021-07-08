import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is home page</Text>
            <TouchableOpacity style={{backgroundColor: "#a0deb0",
            padding: 15,
            width: 250,alignItems: "center", margin: 20}} onPress={() => navigation.push("SecondScreen")}>
                <Text>Click</Text>
            </TouchableOpacity>
            </View>
    )
}

export default Home

const styles = StyleSheet.create({container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },})
