import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type, bgColor, textColor}) => {
  return (
    <TouchableOpacity style={[styles.container,styles[`container_${type}`], bgColor?{backgroundColor:bgColor}:{}]} onPress={onPress} >
      <Text style={[styles[`text_${type}`],textColor?{color:textColor}:{}]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    container_primary:{
        minWidth:'100%',
        backgroundColor:'#4d5a93',
    },
    container_secondary:{
        width:'100%',
        borderColor:'#4d5a93',
        borderWidth:2,
    },
    container_tertiary:{
        color:'#4d5a93',
    },
    text_primary:{
        fontWeight:'bold',
        color:'white',
        fontSize:15,
    },
    text_secondary:{
        fontWeight:'bold',
        color:'#4d5a93',
        fontSize:16,
    },
    text_tertiary:{
        color:'#4d5a93',
        fontWeight:'bold',
        fontSize:15,
        textDecorationLine:'underline',
        textDecorationColor:'#4d5a93',
    },
})

export default CustomButton