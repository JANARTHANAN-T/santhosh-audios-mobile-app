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

const CountEdit = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [visits,setVisits]=useState('')
  const [pageviews,setPageViews]=useState('')

  

  return (
    <View style={{ height: height }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.heading}>
        <MaterialIcons name="construction" size={36} color="black" />
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>Count Edit</Text>
        </View>
        <View style={{marginTop:20}}>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Visit Count</Text>
        <CustomInput placeholder="visit count" value={visits} setValue={setVisits} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
        <Text style={{fontSize:20,marginBottom:10}}>Page Count</Text>
        <CustomInput placeholder="page count" value={pageviews} setValue={setPageViews} />
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

export default CountEdit;
