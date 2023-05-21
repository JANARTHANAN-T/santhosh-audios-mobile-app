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
  const [onUpdate,setOnUpdate]=useState(false)

  useEffect(() => {
    const getCount = async () => {
      await axios({
      method: "get",
      url: "http://192.168.106.146:5000/viewcount/retrieve",
    }).then(async (response) => {
      if (response.data.status) {
        try {
          setVisits(JSON.parse(response.data.json).visits.toString());
          setPageViews(JSON.parse(response.data.json).pageviews.toString());
        } catch (error) {
          console.warn("Something went wrong, please try again!");
        }
      } else {
        console.warn(response.data.msg);
      }
    });
    };
    getCount();
  }, []);

  const updateCount = async()=>{
    await axios({
      method: "post",
      url: "http://192.168.106.146:5000/viewcount/",
      data:{visits:parseInt(visits),pageviews:parseInt(pageviews)}
    }).then(async (response) => {
      if (response.data.status) {
        navigation.navigate('WebEdit')
      } else {
        console.warn(response.data.msg);
      }
    })
  }

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
              onPress={updateCount}
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

export default CountEdit;
