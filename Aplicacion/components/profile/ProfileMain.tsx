import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Statistics from './Statistics'

interface profileProps {
    func: (page: string) => void
}

export default function ProfileMain({func}: profileProps) {

    const userData = {
        name: 'fabrizio411',
        date: new Date()
}
  return (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>My Profile</Text>
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

        <View style={styles.actionBtnBox}>
            <TouchableOpacity style={styles.btn} onPress={() => func('EXERCISES')}><Text style={styles.btnText}>EXERCISES</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => func('BODYWEIGHT')}><Text style={styles.btnText}>BODY WEIGHT</Text></TouchableOpacity>
        </View>

        <View>
            <Statistics/>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
    },

    pageTitle: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 12
    },


    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
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
    },


    actionBtnBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        paddingHorizontal: 16,
        paddingVertical: 40,
        paddingBottom: 25
    },
    btn: {
        flex: 1
    },
    btnText: {
        backgroundColor: '#222',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#555',
        paddingVertical: 16,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },

})