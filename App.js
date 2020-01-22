import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';




export default function TicTac(){

  
const position = (row, col) => {
  let positiongrid = [[" "," "," "],[" "," "," "],[" "," "," "]]
  return <gridcat>positiongrid</gridcat>
}
  return( <View style={styles.container}>
   
    <Text style={styles.title}>KittyCat</Text>
    <View style={styles.gridcat}>
    <View style={{flexDirection:'row'}}><Text style={styles.box}></Text><Text style={styles.box}></Text><Text style={styles.box}></Text></View>
    <View style={{flexDirection:'row'}}><Text style={styles.box}></Text><Text style={styles.box}></Text><Text style={styles.box}></Text></View>
    <View style={{flexDirection:'row'}}><Text style={styles.box}></Text><Text style={styles.box}></Text><Text style={styles.box}></Text></View>
    </View>
    </View>
    );
   
};
const styles=StyleSheet.create({
  container: {
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor: '#FFE66D'
  },
  title:{
    fontSize:40,
    fontWeight:'bold',
    color:'#E86262', 
    marginBottom:50


  },
  gridcat:{
    backgroundColor:'#F7FFF7',
    color:'#1A535C',
    width:300,
    height:300,
    borderColor:'#E89D9D',
    borderWidth:2
  },
  box:{
    borderColor:'#E89D9D',
    borderWidth:2,
    width:100,
    height:100
  }


})