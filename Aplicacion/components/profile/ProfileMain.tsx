import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserCard from './UserCard'

interface profileProps {
  func: (page: string) => void
}

export default function ProfileMain({func}: profileProps) {
  return (
    <View style={styles.pageContainer}>
      <UserCard func={func}/>
    </View>
  )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
    }
})