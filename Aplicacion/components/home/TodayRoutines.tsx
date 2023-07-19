import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Routine from '../Routine'

export default function TodayRoutines() {
    const routineData = [
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
    <View style={styles.container}> 
      <Text style={styles.sectionTitle}>For Today</Text>

      <View style={styles.scrollContainer}>
        <ScrollView>
            <View style={styles.routinesBox}>
                {routineData.map((item, index) => (
                    <Routine key={index} name={item.name} muscleGroup={item.muscleGroup} />
                ))}
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionTitle: {
        marginHorizontal: 16,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },

    scrollContainer: {
        flex: 1,
        marginBottom: 12,
    },

    routinesBox: {
        display: 'flex',
        gap: 12
    }
})