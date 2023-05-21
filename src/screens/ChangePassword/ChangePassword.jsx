import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'

const ChangePassword = ({navigation}) => {
  const {height} = useWindowDimensions()
  const [password, setPassword]= useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [errorMsg,setErrorMsg]=useState('')
return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[styles.root, {height:height}]}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image source={logo} style={[styles.logo]} resizeMode="contain" />
          <CustomInput placeholder="New Password" value={password} setValue={setPassword} secureText />
          <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureText />
          <Text style={{color:'red'}}>{errorMsg}</Text>
          <View style={{marginVertical:30}}>
          <CustomButton text='Change Password' onPress={()=>navigation.navigate('Home')}  type="primary" />
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