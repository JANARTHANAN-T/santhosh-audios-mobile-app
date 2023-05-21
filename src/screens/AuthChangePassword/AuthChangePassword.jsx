import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useEffect,useLayoutEffect, useState} from 'react'
import logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangePassword = ({navigation,route}) => {
  const {height} = useWindowDimensions()
  const [password, setPassword]= useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [errorMsg,setErrorMsg]=useState('')
  const [user,setUser]=useState('')

  useLayoutEffect(() => {
    const getUser = async () => {
      var user_token = await AsyncStorage.getItem("authValue");
      setUser(JSON.parse(user_token));
    };
    getUser();
  }, []);

  const changepassword = async()=>{
    if(password!=='' && password===confirmPassword){
    await axios({
      method: "post",
      url: `https://api.santhoshaudios.in/auth/forgotpass/`,
      data:{email:route.params.email,password},
    }).then(async (response) => {
      if (response.data.status) {
        try {
          console.log(response.data.user);
          navigation.navigate('LogIn')
        } catch (error) {
          setErrorMsg('Something went wrong, please try again!')
        }
      } else {
        setErrorMsg(response.data.msg);
        setTimeout(()=>{
          setErrorMsg('')
        },3000)
      }
    });
  }else{
    setErrorMsg('Check your password')
    setTimeout(()=>{
      setErrorMsg('')
    },3000)
  }
  }

return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[styles.root, {height:height}]}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image source={logo} style={[styles.logo]} resizeMode="contain" />
          <CustomInput placeholder="New Password" value={password} setValue={setPassword} secureText />
          <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureText />
          <Text style={{color:'red'}}>{errorMsg}</Text>
          <View style={{marginVertical:30}}>
          <CustomButton text='Change Password' onPress={changepassword}  type="primary" />
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
export default ChangePassword