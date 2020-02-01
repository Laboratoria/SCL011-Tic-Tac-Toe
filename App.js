import React, { Component } from 'react'
import { StyleSheet, ImageBackground} from 'react-native'
import Header from './src/container/header'
import Body from './src/container/body'

class App extends Component {

render(){
  return (
    <ImageBackground source={require('./assets/fondo.png')} style={styles.container}>
     <Header/>
     <Body/>
    </ImageBackground>
  )
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE66D',
    flexDirection:'column'
  }
  
})
export default App