import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface headerProps {
  func: (page: string) => void
}

export default function Header({func}: headerProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => func('HOME')}><Text style={styles.headerSVG}>HOME</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => func('ROUTINES')}><Text style={styles.headerSVG}>ROUTINES</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => func('PROFILE')}><Text style={styles.headerSVG}>PROFILE</Text></TouchableOpacity>
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
        fontSize: 20,
        paddingVertical: 10
    },
})