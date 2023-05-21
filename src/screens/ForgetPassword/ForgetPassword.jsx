import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'

const ForgetPassword = ({navigation}) => {
    const {height} = useWindowDimensions()
    const [userEmail, setUserEmail]= useState('admin@gmail.com')
    const [errorMsg,setErrorMsg]=useState('')
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.root, {height:height}]}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={logo} style={[styles.logo]} resizeMode="contain" />
            <CustomInput placeholder="Enter Email" value={userEmail} setValue={setUserEmail} />
            <Text style={{color:'red'}}>{errorMsg}</Text>
            <View style={{marginVertical:30}}>
            <CustomButton text='Send OTP'  type="primary" onPress={()=>navigation.navigate('OTPEnter')} />
            </View>
          </View>
      </View>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
    root:{
      alignItems:'center',
      paddingHorizontal:40,
      justifyContent:'space-between'
    },
    logo:{
      height: 75,
      marginBottom:80,
      justifyContent:'center'
  
    },
    signUp:{
      color:'#4d5a93',
      textDecorationLine:'underline',
    },
  })

export default ForgetPassword