import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'


interface ProgramProps {
    func: (page: string) => void
}

export default function WeekProgram({func}: ProgramProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Program</Text>

      <TouchableOpacity onPress={() => func('PROGRAM')} style={styles.programCard} >
        <View style={styles.row}>
            <Text style={styles.cardTitle}>My Week</Text>
            <TouchableOpacity><Text>O</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
            <Text style={styles.daysLetter}>M</Text>
            <Text style={styles.daysLetter}>T</Text>
            <Text style={styles.daysLetter}>W</Text>
            <Text style={styles.daysLetter}>T</Text>
            <Text style={styles.daysLetter}>F</Text>
            <Text style={styles.daysLetter}>S</Text>
            <Text style={styles.daysLetter}>S</Text>
        </View>

        <View style={styles.row}>
            <View style={styles.checkBoxes}></View>
            <View style={styles.checkBoxes}></View>
            <View style={styles.checkBoxes}></View>
            <View style={styles.checkBoxes}></View>
            <View style={styles.checkBoxes}></View>
            <View style={styles.checkBoxes}></View>
            <View style={styles.checkBoxes}></View>
        </View>


      </TouchableOpacity>
    </View>
  )
}


// STYLES VARAIBLES
const daysDimentions = 20

const styles = StyleSheet.create({
    sectionTitle: {
        marginHorizontal: 16,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },

    programCard: {
        marginHorizontal: 16,
        padding: 20,
        paddingTop: 16,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 8,
        backgroundColor: '#222'
    },

    row: {
       flexDirection: 'row',
       justifyContent: 'space-between'
    },

    cardTitle: {
        fontSize: 18,
        marginBottom: 16,
        fontWeight: 'bold'
    },
    daysLetter: {
        width: daysDimentions,
        textAlign: 'center',
        marginBottom: 2
    },
    checkBoxes: {
        backgroundColor: '#444',
        width: daysDimentions,
        height: daysDimentions,
        borderRadius: daysDimentions / 2
    },
})