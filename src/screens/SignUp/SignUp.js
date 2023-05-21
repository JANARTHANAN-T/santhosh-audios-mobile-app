import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'

const SignUp = ({navigation}) => {
    const {height} = useWindowDimensions()
    const [userName, setUserName]= useState('')
    const [userEmail, setUserEmail]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
    const [errorMsg,setErrorMsg]=useState('')
 
    const onSignUpPress = async() =>{
      AsyncStorage.clear();
      if(userName===''&&userEmail===""&&password===""&&confirmPassword===""){
        setErrorMsg('All fields are mandatory')
        return ;
      }
      if(password===confirmPassword){
        await axios({
          method: 'post',
          url: 'https://api.santhoshaudios.in/auth/register',
          data:{username:userName,email:userEmail,password},
        }).then(async(response) => {
          if(response.data.status){
            try {
              console.log(response.data.user);
              navigation.navigate('MyAccount')
            } catch (error) {
              setErrorMsg('Something went wrong, please try again!')
            }
          }else{
            if(response.data.err.code===11000){
              setErrorMsg("Email already exit")
            }
          }
        });
      }else{
        setErrorMsg("Check your password!");
      }
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root, {height:height}]}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image source={logo} style={[styles.logo]} resizeMode="contain" />
                <Text style={styles.title}>Add an Admin</Text>
              <CustomInput placeholder="User Name" value={userName} setValue={setUserName} />
              <CustomInput placeholder="User Email" value={userEmail} setValue={setUserEmail} />
              <CustomInput placeholder="Set Password" value={password} setValue={setPassword} secureText />
              <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureText />
              <Text style={{color:'red'}}>{errorMsg}</Text>
              <View style={{marginVertical:30}}>
              <CustomButton text='Add Account' onPress={onSignUpPress} type="primary" />
              </View>
            </View>
            <View style={{paddingVertical:10, borderTopWidth:.5, borderTColor:'gray', width:'100%'}}><Text style={{textAlign:'center', fontSize:16,color:'gray'}} onPress={()=> navigation.navigate("MyAccount")}>Go Back to My Account</Text></View>
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
    logIn:{
      color:'#4d5a93',
      textDecorationLine:'underline',
    },
    title:{
        fontSize:24,
        fontWeight:'500',
        marginBottom:30,
    }
  })

export default SignUp