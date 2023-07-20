import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View>
      <Text style={styles.appTitle}>WorkOutApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    appTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
        marginVertical: 8,
        marginBottom: 8
    },
})