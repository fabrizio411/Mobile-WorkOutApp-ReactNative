import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WeekProgram from './WeekProgram'
import TodayRoutines from './TodayRoutines'


export default function HomeMain() {
    return (
      <View style={styles.pageContainer}>
          <WeekProgram/>
          <TodayRoutines/>
      </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        marginTop: 10,
        flex: 1,
        gap: 30,
    }
})