import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


interface RoutineProps {
    name: string,
    muscleGroup: string[],
}

export default function Routine({name, muscleGroup}: RoutineProps) {
    return (
        <TouchableOpacity style={styles.routineContainer}>
            <Text style={styles.name}>{name}</Text>
            <View  style={styles.musclesBox}>
                {muscleGroup.map((item, index) => (
                    <Text  style={styles.muscles} key={index}>{item}</Text>
                ))}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    routineContainer: {
        marginHorizontal: 16,
        padding: 20,
        paddingTop: 16,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 8,
        backgroundColor: '#666'
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },

    musclesBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    muscles: {
        textTransform: 'uppercase'
    },
})