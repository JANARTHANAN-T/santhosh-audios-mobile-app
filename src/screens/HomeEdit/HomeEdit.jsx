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

const HomeEdit = ({ navigation, route }) => {
  const { height } = useWindowDimensions();
  const [title,setTitle]=useState(route.params.data.Title)
  const [quote1,setQuote1]=useState(route.params.data.Quotes[0])
  const [quote2,setQuote2]=useState(route.params.data.Quotes[1])
  const [quote3,setQuote3]=useState(route.params.data.Quotes[2])
  const [onUpdate,setOnUpdate]=useState(false)

  const updateContent = async() =>{
    await axios({
      method: "put",
      url: "https://api.santhoshaudios.in/edit/data",
      data:{key:"Home",value:{Title:title,Quotes:[quote1,quote2,quote3]}}
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
            <CustomButton text='Save Changes' onPress={()=>setOnUpdate(true)}  type="primary" />
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

export default HomeEdit;
