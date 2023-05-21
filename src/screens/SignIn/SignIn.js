import React, {useEffect, useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants';
import OneSignal from 'react-native-onesignal';
OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId)



const SignIn = ({navigation}) => {
  const {height} = useWindowDimensions()
  const [userEmail, setUserEmail]= useState('')
  const [password, setPassword]= useState('')
  const [errorMsg,setErrorMsg]=useState('')
  const [deviceId,setDeviceId]=useState('')

  
  useEffect(()=>{
    const getDeviceID=async()=>{
        let device= await OneSignal.getDeviceState() 
        setDeviceId(device.userId)  
        console.log(deviceId);
    }
    getDeviceID()
  },[])


  const onLogInPress = async() =>{
    if(userEmail===''&&password===""){
      setErrorMsg('All fields are mandatory')
      return ;
    }

    await axios({
        method: 'post',
        url: 'https://api.santhoshaudios.in/auth/login',
        data:{email:userEmail,password,deviceId},
      }).then(async(response) => {
        if(response.data.status){
          try {
            await AsyncStorage.setItem('authValue',JSON.stringify({...response.data.user}));
            navigation.navigate('Home')
          } catch (error) {
            setErrorMsg("Something went wrong, please try again!")
          }
        }else{
            setErrorMsg(response.data.msg)
        }
      });
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.root, {height:height}]}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={logo} style={[styles.logo]} resizeMode="contain" />
            {/* <Text style={{fontSize:20, fontWeight:'bold',marginBottom:30}}>LOG IN</Text> */}
            <CustomInput placeholder="User Email" value={userEmail} setValue={setUserEmail} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureText />
            <Text style={{color:'red'}}>{errorMsg}</Text>
            <View style={{marginVertical:30}}>
            <CustomButton text='Log In' onPress={onLogInPress} type="primary" />
            <View style={styles.forgotPassword}>
            <Text  onPress={()=>navigation.navigate('ForgotPassword')} style={styles.forgotPassword}  >Forgot Password!</Text>
            </View>
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
  forgotPassword:{
    alignItems:'center',
    marginVertical:15,
    color:'#4d5a93',
    color:'#4d5a93',
    fontWeight:'bold',
    fontSize:15,
    textDecorationLine:'underline',
    textDecorationColor:'#4d5a93',
  }
})

export default SignIn