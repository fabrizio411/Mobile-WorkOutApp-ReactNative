import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WeekProgram from './WeekProgram'
import TodayRoutines from './TodayRoutines'

interface HomeProps {
    func: (page: string) => void
}


export default function HomeMain({func}: HomeProps) {
    return (
      <View style={styles.pageContainer}>
          <WeekProgram func={func}/>
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