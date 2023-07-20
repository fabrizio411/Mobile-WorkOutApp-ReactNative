import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

interface bwProps {
    func: (page: string) => void
}

export default function BodyWeightMain({func}: bwProps) {

    const measures = [
        {data: 75, date: new Date(2023,9,19)}, {data: 74.55, date: new Date(2023,10,12)}, {data: 78.2, date: new Date(2023,8,15)}, {data: 75.7, date: new Date(2023,11,9)},
    ]

    const sortMeasures = measures.sort((x, y) => y.date.getTime() - x.date.getTime())

  return (
    <View style={styles.pageContainer}>
        <View>
            <TouchableOpacity style={styles.actionBtn} onPress={() => func('HOME')}><Text style={styles.backBtn}>&lt;</Text></TouchableOpacity>
            <Text style={styles.title}>Body Weight</Text>
        </View>

        <TouchableOpacity><Text style={styles.addBtn}>+ New Meassure</Text></TouchableOpacity>
        <ScrollView style={styles.scroll}>
            {sortMeasures.map((item, index) => (
                <View style={styles.dataContainer} key={index}>
                    <Text>{item.date.getDate()}/{item.date.getMonth()}/{item.date.getFullYear()}</Text>
                    <Text style={styles.dataTxt}>{item.data} <Text style={styles.dataUnit}>kg</Text></Text>
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


    addBtn: {
        textAlign: 'center',
        backgroundColor: '#222',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#555',
        margin: 18,
        paddingVertical: 12,
        fontSize: 18,
        fontWeight: 'bold'
    },

    scroll: {
        flex: 1
    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#444',
        marginHorizontal: 18,
        borderRadius: 8,
        marginBottom: 8,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    dataTxt: {
        fontSize: 16,
        color: '#fafafa'
    },
    dataUnit: {
        color: '#999'
    }
})