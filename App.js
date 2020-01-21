import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';

const styles=StyleSheet.create({
  container: {
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor: 'pink'
  },
  backgrounkitty:{
    width: '100%', 
    height: '100%'
  },
  one:{
    fontWeight:'bold',
    fontSize:50,
    color:'blue'
     },
  two:{
    color:'red'
  }
});

 class TicTac extends Component{
  render(){
    return(
   
      <View style={styles.container}>
   <ImageBackground source={require('./assets/tempsnip.png')} style={styles.backgrounkitty}>
       <Image source={require('./assets/kittyred.png')} />
       {/* <Image source={require('./assets/kittypink.png')} /> */}
     
               <Text style={styles.one}>Hola Naty!!!</Text>
        <Text style={styles.two}>Vas Avanzando...</Text>
        </ImageBackground>
      </View>
     
    )
  }
}export default TicTac
