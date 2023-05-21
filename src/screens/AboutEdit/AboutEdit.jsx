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

const AboutEdit = ({ navigation, route }) => {
  const { height } = useWindowDimensions();
  const [Image,setImage]=useState(route.params.data.Image)
  const [AboutUs,setAboutUs]=useState(route.params.data.AboutUs)
  const [Mission,setMission]=useState(route.params.data.Mission)
  const [Vision,setVision]=useState(route.params.data.Vision)
  const [onUpdate,setOnUpdate]=useState(false)

  const updateContent = async() =>{
    await axios({
      method: "put",
      url: "http://192.168.106.146:5000/edit/data",
      data:{key:"About",value:{Image,AboutUs,Mission,Vision}}
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
            <CustomButton text='Save Changes' onPress={()=>setOnUpdate(true)} type="primary" />
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

export default AboutEdit;
