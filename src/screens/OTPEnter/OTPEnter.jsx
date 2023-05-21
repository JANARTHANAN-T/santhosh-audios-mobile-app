import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'

const OTPEnter = ({navigation,route}) => {
    const {height} = useWindowDimensions()
    const [OTP, setOTP]= useState('')
    const [errorMsg,setErrorMsg]=useState('')
    const useOTP = async()=>{
      await axios({
        method: "post",
        url: `https://api.santhoshaudios.in/auth/useotp/`,
        data:{email:route.params.email,otp:OTP},
      }).then(async (response) => {
        if (response.data.status) {
          try {
            navigation.navigate('AuthChangePassword',{email:route.params.email})
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
            <CustomInput placeholder="Enter OTP" value={OTP} setValue={setOTP} />
            <Text style={{color:'red'}}>{errorMsg}</Text>
            <View style={{marginVertical:30}}>
            <CustomButton text='Confirm OTP' onPress={useOTP}   type="primary" />
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
export default OTPEnter