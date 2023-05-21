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

const AboutEdit = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [Image,setImage]=useState('')
  const [AboutUs,setAboutUs]=useState('')
  const [Mission,setMission]=useState('')
  const [Vision,setVision]=useState('')

  

  return (
    <View style={{ height: height }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.heading}>
        <MaterialIcons name="construction" size={36} color="black" />
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>About Page Edit</Text>
        </View>
        <View style={{marginTop:20}}>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Image URL</Text>
        <CustomInput placeholder="Image URL" value={Image} setValue={setImage} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>About Us</Text>
        <CustomInput placeholder="About Us" value={AboutUs} setValue={setAboutUs} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Mission</Text>
        <CustomInput placeholder="Mission" value={Mission} setValue={setMission} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Vision</Text>
        <CustomInput placeholder="Vision" value={Vision} setValue={setVision} />
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

export default AboutEdit;
