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

const ServiceEdit = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [title,setTitle]=useState('')
  const [quote1,setQuote1]=useState('')
  const [quote2,setQuote2]=useState('')
  const [quote3,setQuote3]=useState('')

  

  return (
    <View style={{ height: height }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.heading}>
        <MaterialIcons name="construction" size={36} color="black" />
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>Home Page Edit</Text>
        </View>
        <View style={{marginTop:20}}>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Title</Text>
        <CustomInput placeholder="Title" value={title} setValue={setTitle} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Quote Line 1</Text>
        <CustomInput placeholder="Quote 1" value={quote1} setValue={setQuote1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Quote Line 2</Text>
        <CustomInput placeholder="Quote 2" value={quote2} setValue={setQuote2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Quote Line 3</Text>
        <CustomInput placeholder="Quote 3" value={quote3} setValue={setQuote3} />
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

export default ServiceEdit;
