import { StyleSheet, Text, View } from 'react-native'
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
    <View>
      <Text style={styles.sectionTitle}>For Today</Text>

      <View style={styles.routinesBox}>
        {routineData.map((item, index) => (
            <Routine key={index} name={item.name} muscleGroup={item.muscleGroup} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sectionTitle: {
        marginHorizontal: 16,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },

    routinesBox: {
        display: 'flex',
        gap: 12
    }
})