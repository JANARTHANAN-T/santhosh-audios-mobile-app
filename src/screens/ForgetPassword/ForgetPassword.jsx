import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'

const ForgetPassword = ({navigation}) => {
    const {height} = useWindowDimensions()
    const [userEmail, setUserEmail]= useState('')
    const [errorMsg,setErrorMsg]=useState('')
    const generateOTP = async()=>{
      setErrorMsg("Wait for OTP to be send to your mail")
      await axios({
        method: "post",
        url: `https://api.santhoshaudios.in/auth/genotp/`,
        data:{email:userEmail},
      }).then(async (response) => {
        if (response.data.status) {
          try {
            navigation.navigate('OTPEnter',{email:userEmail})
          } catch (error) {
            setErrorMsg("Something went wrong, please try again!");
            setTimeout(()=>{
              setErrorMsg('')
            },3000)
          }
        } else {
          setErrorMsg(response.data.msg);
          setTimeout(()=>{
            setErrorMsg('')
          },3000)
        }
      });
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.root, {height:height}]}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={logo} style={[styles.logo]} resizeMode="contain" />
            <CustomInput placeholder="Enter Email" value={userEmail} setValue={setUserEmail} />
            <Text style={{color:'red'}}>{errorMsg}</Text>
            <View style={{marginVertical:30}}>
            <CustomButton text='Send OTP'  type="primary" onPress={generateOTP} />
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