import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureText}) => {
  return (
    <View style={styles.container} >
      <TextInput value={value} onChangeText={setValue}  placeholder={placeholder} style={styles.input} secureTextEntry={secureText} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        minWidth:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        marginVertical:5,
    },
})

export default CustomInput