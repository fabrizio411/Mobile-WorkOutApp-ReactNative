import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Statistics() {

    const data = {
        workouts: 20,
        streak: 3,
        bestWeight: 75,
        bestExercise: {
            name: 'PullUp',
            total: 206
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Statistics</Text>

            <View style={styles.statsContainer}>
                <View style={styles.statisticsBox}>
                    <Text style={styles.heading}>Workouts</Text>
                    <View style={styles.infoDataBox}>
                        <Text style={styles.dataValue}>{data.workouts}</Text>
                        <Text>total</Text>
                    </View>
                </View>
                <View style={styles.statisticsBox}>
                    <Text style={styles.heading}>Week Streak</Text>
                    <View style={styles.infoDataBox}>
                        <Text style={styles.dataValue}>{data.streak}</Text>
                        <Text>weeks</Text>
                    </View>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statisticsBox}>
                    <Text style={styles.heading}>Best Weight</Text>
                    <View style={styles.infoDataBox}>
                        <Text style={styles.dataValue}>{data.bestWeight}</Text>
                        <Text>kg</Text>
                    </View>
                </View>
                <View style={styles.statisticsBox}>
                    <Text style={styles.heading}>{data.bestExercise.name}</Text>
                    <View style={styles.infoDataBox}>
                        <Text style={styles.dataValue}>{data.bestExercise.total}</Text>
                        <Text>reps</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },

    sectionTitle: {
        marginHorizontal: 8,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },

    statsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        marginBottom: 16
    },
    statisticsBox: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#555',
        paddingVertical: 12
    },
    infoDataBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        alignItems: 'baseline'
    },

    heading: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dataValue: {
        fontSize: 40,
        fontWeight: 'bold'
    },

})