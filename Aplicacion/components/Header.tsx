import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity><Text style={styles.headerSVG}>O</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.headerSVG}>O</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.headerSVG}>O</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#666',
        height: 70,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
        bottom: 0
    },
    headerSVG: {
        fontWeight: 'bold',
        fontSize: 20
    },
})