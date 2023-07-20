import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import HomeMain from '../components/home/HomeMain'
import ProfileMain from '../components/profile/ProfileMain'
import RoutinesMain from '../components/routines/RoutinesMain'
import ProgramMain from '../components/home/week_program/ProgramMain'

const App = () => {

    const [currentPage, setCurrentPage] = useState('HOME')
    const changePage = (page: string) => {
        setCurrentPage(page)
    }

    return (
        <>
            <StatusBar backgroundColor={'#333'}/>

            <SafeAreaView style={styles.appContainer}>
                <View style={styles.content}>
                    <Text style={styles.appTitle}>WorkOutApp</Text>
                    {currentPage === 'HOME' && <HomeMain func={changePage}/>}
                    {currentPage === 'PROGRAM' && <ProgramMain/>}
                    {currentPage === 'PROFILE' && <ProfileMain func={changePage}/>}
                    {currentPage === 'ROUTINES' && <RoutinesMain func={changePage}/>}
                </View>

                <Header func={changePage}/>
            </SafeAreaView>
        </>
  )
}

export default App

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },

    content: {
        flex: 1
    },
    appTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
        marginVertical: 8,
        marginBottom: 8
    },
})