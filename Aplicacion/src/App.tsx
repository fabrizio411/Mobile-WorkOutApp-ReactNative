import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import HomeMain from '../components/home/HomeMain'
import ProfileMain from '../components/profile/ProfileMain'
import RoutinesMain from '../components/routines/RoutinesMain'
import ProgramMain from '../components/home/week_program/ProgramMain'
import BodyWeightMain from '../components/profile/body_weight/BodyWeightMain'

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
                    {currentPage === 'HOME' && <HomeMain func={changePage}/>}
                    {currentPage === 'PROGRAM' && <ProgramMain func={changePage}/>}

                    {currentPage === 'PROFILE' && <ProfileMain func={changePage}/>}
                    {currentPage === 'BODYWEIGHT' && <BodyWeightMain func={changePage}/>}

                    {currentPage === 'ROUTINES' && <RoutinesMain func={changePage}/>}
                </View>

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

})