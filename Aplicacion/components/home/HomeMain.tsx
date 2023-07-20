import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WeekProgram from './WeekProgram'
import TodayRoutines from './TodayRoutines'
import Title from '../Title'
import Header from '../Header'

interface HomeProps {
    func: (page: string) => void
}


export default function HomeMain({func}: HomeProps) {
    return (
        <View style={styles.pageContainer}>
            <Title/>
            <WeekProgram func={func}/>
            <TodayRoutines/>
            <Header func={func}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        gap: 30,
    }
})