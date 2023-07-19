import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import HomeMain from './components/home/HomeMain'

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View>
        <Text style={styles.appTitle}>WorkOutApp</Text>

        <HomeMain/>
      </View>


      <Header/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  appTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8
  },



  sssssss: {},
})