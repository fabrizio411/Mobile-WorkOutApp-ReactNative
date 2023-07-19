import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Header from './components/Header'
import HomeMain from './components/home/HomeMain'

const App = () => {

  const [currentPage, setCurrentPage] = useState('HOME')
  const changePage = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.content}>
        <Text style={styles.appTitle}>WorkOutApp</Text>


        {currentPage === 'HOME' && <HomeMain/>}
        
      </View>


      <Header func={changePage}/>
    </SafeAreaView>
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
    marginVertical: 8,
    marginBottom: 16
  },
})