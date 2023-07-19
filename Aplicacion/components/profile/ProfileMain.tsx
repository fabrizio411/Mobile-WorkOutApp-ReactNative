import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import UserCard from './UserCard'

interface profileProps {
  func: (page: string) => void
}

export default function ProfileMain({func}: profileProps) {
  return (
    <View style={styles.pageContainer}>
      <UserCard func={func}/>

      <View style={styles.actionBtnBox}>
        <TouchableOpacity style={styles.btn} onPress={() => func('EXERCISES')}><Text style={styles.btnText}>EXERCISES</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => func('BODYWEIGHT')}><Text style={styles.btnText}>BODY WEIGHT</Text></TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
    },


    actionBtnBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    btn: {
        flex: 1
    },
    btnText: {
        backgroundColor: '#222',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#555',
        paddingVertical: 16,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },

})