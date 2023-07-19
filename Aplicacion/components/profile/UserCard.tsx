import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface profileProps {
    func: (page: string) => void
  }

export default function UserCard({func}: profileProps) {

    const userData = {
        name: 'fabrizio411',
        date: new Date()
    }

  return (
    <View style={styles.cardContainer}>
        <View style={styles.userDataContainer}>
            <View>
                <View style={styles.profilePic}></View>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.userName}>{userData.name}</Text>
                <Text>{userData.date.getDate()}/{userData.date.getMonth()}/{userData.date.getFullYear()}</Text>
            </View>

        </View>
        <TouchableOpacity onPress={() => func('SETTINGS')}>
            <Text style={styles.config}>SETTINGS</Text>
        </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },

    userDataContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#666'
    },
    infoBox: {},
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5
    },

    config: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})