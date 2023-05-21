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

const ContactEdit = ({ navigation, route }) => {
  const { height } = useWindowDimensions();
  const [Email1,setEmail1]=useState(route.params.data.Email1)
  const [Email2,setEmail2]=useState(route.params.data.Email2)
  const [WhatsApp1,setWhatsApp1]=useState(route.params.data.WhatsApp1)
  const [WhatsApp2,setWhatsApp2]=useState(route.params.data.WhatsApp2)
  const [Instagram,setInstagram]=useState(route.params.data.Instagram)
  const [AddressStreet,setAddressStreet]=useState(route.params.data.AddressStreet)
  const [AddressArea,setAddressArea]=useState(route.params.data.AddressArea)
  const [AddressDistrict,setAddressDistrict]=useState(route.params.data.AddressDistrict)
  const [onUpdate,setOnUpdate]=useState(false)
  

  const updateContent = async() =>{
    await axios({
      method: "put",
      url: "http://192.168.106.146:5000/edit/data",
      data:{key:"Contact",value:{Email1,Email2,WhatsApp1,WhatsApp2,Instagram,AddressArea,AddressDistrict,AddressStreet}}
    }).then(async (response) => {
      if (response.data.status) {
        navigation.navigate('WebEdit')
      } else {
        console.warn(response.data.msg);
      }
    });
  }

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
            <CustomButton text='Save Changes' onPress={()=>setOnUpdate(true)}   type="primary" />
        </View>
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} />
      {onUpdate && (
        <View
          style={{
            height: "103 %",
            width: "100%",
            zIndex: 10,
            position: "absolute",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          }}
        >
          <View style={styles.deleteUserCard}>
            <Text style={{ fontSize: 20, fontWeight: "300", marginBottom: 20 }}>
              This is to confirm that on pressing the below "Update" button will change the content and never be retrieve preview content.
            </Text>
            <CustomButton
              text="Update"
              onPress={updateContent}
              type="primary"
            />
            <CustomButton
              text="Close"
              bgColor="#C41E3A"
              onPress={() => setOnUpdate(false)}
              type="primary"
            />
          </View>
        </View>
      )}
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
  deleteUserCard: {
    marginHorizontal: 50,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
});

export default ContactEdit;
