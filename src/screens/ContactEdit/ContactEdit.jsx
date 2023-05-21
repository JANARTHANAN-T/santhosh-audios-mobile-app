import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React,{useState, useLayoutEffect,useEffect} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomNavigation from "../../../src/components/BottomNavigation";
import axios from "axios";
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const ContactEdit = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [Email1,setEmail1]=useState('')
  const [Email2,setEmail2]=useState('')
  const [WhatsApp1,setWhatsApp1]=useState('')
  const [WhatsApp2,setWhatsApp2]=useState('')
  const [Instagram,setInstagram]=useState('')
  const [AddressStreet,setAddressStreet]=useState('')
  const [AddressArea,setAddressArea]=useState('')
  const [AddressDistrict,setAddressDistrict]=useState('')

  

  return (
    <View style={{ height: height }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.heading}>
        <MaterialIcons name="construction" size={36} color="black" />
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>Contact Page Edit</Text>
        </View>
        <View style={{marginTop:20}}>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Email 1</Text>
        <CustomInput placeholder="Email 1" value={Email1} setValue={setEmail1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Email 2</Text>
        <CustomInput placeholder="Email 2" value={Email2} setValue={setEmail2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>WhatsApp 1</Text>
        <CustomInput placeholder="WhatsApp 1" value={WhatsApp1} setValue={setWhatsApp1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>WhatsApp 2</Text>
        <CustomInput placeholder="WhatsApp 2" value={WhatsApp2} setValue={setWhatsApp2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Instagram</Text>
        <CustomInput placeholder="Instagram" value={Instagram} setValue={setInstagram} />
        </View>
        <Text style={{fontSize:24,marginVertical:20, marginHorizontal:30}}>Address</Text>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Door No, Street</Text>
        <CustomInput placeholder="Door No, Street" value={AddressStreet} setValue={setAddressStreet} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Area</Text>
        <CustomInput placeholder="Area" value={AddressArea} setValue={setAddressArea} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>District, Pincode</Text>
        <CustomInput placeholder="District, Pincode" value={AddressDistrict} setValue={setAddressDistrict} />
        </View>
        <View style={{margin:30}}>
            <CustomButton text='Save Changes'  type="primary" />
        </View>
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 64,
    justifyContent: "flex-start",
    margin: 20,
  },
});

export default ContactEdit;
