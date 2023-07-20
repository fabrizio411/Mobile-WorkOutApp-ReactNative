import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import Routine from '../../Routine'

interface ProgramProps {
    func: (page: string) => void
}

export default function ProgramMain({func}: ProgramProps) {

    const programData = [
        {
            day: 'Monday',
            routine: [
                {
                    name: 'Pull Routine',
                    muscleGroup: ['Back', 'Biceps', 'Forearms']
                }
            ]
        },
        {
            day: 'Tuesday',
            routine: []
        },
        {
            day: 'Wednesday',
            routine: [
                {
                    name: 'Legs Rutina',
                    muscleGroup: ['Quadriceps', 'Hamstrings', 'Glutes']
                },
                {
                    name: 'Abs routine',
                    muscleGroup: ['Abdominals']
                }
            ]
        },
        {
            day: 'Thursday',
            routine: []
        },
        {
            day: 'Friday',
            routine: [
                {
                    name: 'Push Rutina',
                    muscleGroup: ['Shoulders', 'Chest', 'Triceps']
                }
            ]
        },
        {
            day: 'Saturday',
            routine: []
        },
        {
            day: 'Sunday',
            routine: []
        },
    ]

    return (
        <View style={styles.pageContainer}>
            <View>
                <TouchableOpacity style={styles.actionBtn} onPress={() => func('HOME')}><Text style={styles.backBtn}>&lt;</Text></TouchableOpacity>
                <Text style={styles.title}>Workout Program</Text>
            </View>

            <ScrollView style={styles.scroll}>
                {programData.map((item, index) => (
                <View style={styles.dayContainer} key={index}>
                    <View style={styles.headingBox}>
                        <Text style={styles.dayHeading}>{item.day}</Text>
                        <TouchableOpacity><Text style={styles.addBtn}>+</Text></TouchableOpacity>
                    </View>
                    {item.routine.length > 0 ? ( 
                        item.routine.map((item, index) => (
                            <View style={styles.routineBox} key={index}>
                                <Routine name={item.name} muscleGroup={item.muscleGroup}/>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.restDayText}>Rest Day</Text>
                    )}

                </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginVertical: 12
    },
    actionBtn: {
        padding: 20,
        position: 'absolute',
        top: -10,
    },
    backBtn: {
        fontSize: 30,
        color: '#FFF',
    },


    scroll: {
        marginTop: 12,
        flex: 1
    },
    dayContainer: {
        marginBottom: 25
    },
    headingBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    dayHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 18,
        marginBottom: 5
    },
    addBtn: {
        marginRight: 16,
        fontSize: 25,
        paddingHorizontal: 15,
    },
    routineBox: {
        marginBottom: 12
    },
    restDayText: {
        backgroundColor: '#444',
        borderRadius: 12,
        marginHorizontal: 16,
        paddingVertical: 12,
        paddingLeft: 30,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12
    },
})