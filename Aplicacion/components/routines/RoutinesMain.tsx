import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Routine from '../Routine'

interface RoutineProps {
    func: (page: string) => void
}

export default function RoutinesMain({func}: RoutineProps) {

    const routineData = [
        {
            name: 'Primera Rutina',
            muscleGroup: ['Shoulders', 'Chest', 'Triceps']
        },
        {
            name: 'Segunda Rutina',
            muscleGroup: ['Back', 'Biceps', 'Forearms']
        },
        {
            name: 'Primera Rutina',
            muscleGroup: ['Shoulders', 'Chest', 'Triceps']
        },
        {
            name: 'Segunda Rutina',
            muscleGroup: ['Back', 'Biceps', 'Forearms']
        },
        {
            name: 'Primera Rutina',
            muscleGroup: ['Shoulders', 'Chest', 'Triceps']
        },
        {
            name: 'Segunda Rutina',
            muscleGroup: ['Back', 'Biceps', 'Forearms']
        },
        {
            name: 'Primera Rutina',
            muscleGroup: ['Shoulders', 'Chest', 'Triceps']
        },
        {
            name: 'Segunda Rutina',
            muscleGroup: ['Back', 'Biceps', 'Forearms']
        },
    ]
    
  return (
    <View style={styles.pageContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => func('NEWROUTINE')}>
            <Text style={styles.btnTxt}>+ New Routine</Text>
        </TouchableOpacity>

        <View style={styles.routinesContainer}>
            <Text style={styles.sectionTitle}>My Routines</Text>
            <ScrollView style={styles.scroll}>
                {routineData.map((item, index) => (
                    <View style={styles.routine} key={index}> 
                        <Routine name={item.name} muscleGroup={item.muscleGroup} />
                    </View>
                ))}
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
    },

    btn: {
        margin: 16,
    },
    btnTxt: {
        backgroundColor: '#222',
        borderColor: '#555',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 12,
        textAlign: 'center',
        fontSize: 20,
    },


    sectionTitle: {
        marginHorizontal: 16,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },
    routinesContainer: {
        flex: 1
    },
    scroll: {
        flex: 1,
    },

    routine: {
        marginBottom: 12
    }
})