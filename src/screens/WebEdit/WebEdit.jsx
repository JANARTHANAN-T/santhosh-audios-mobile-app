import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Linking,
  Alert
} from "react-native";
import React, {useLayoutEffect, useState} from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomNavigation from "../../../src/components/BottomNavigation";
import axios from "axios";
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'


const WebEdit = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [onCommit,setOnCommit]=useState(false)
  const [data,setData]=useState({})
  const [commitMsg,setCommitMsg]=useState({})


  useLayoutEffect(()=>{
    const getdata=async()=>{
    await axios({
      method: "get",
      url: "https://api.santhoshaudios.in/edit/data",
    }).then(async (response) => {
      if (response.data.status) {
        try {
          await setData(response.data.object);
        } catch (error) {
          console.warn("Something went wrong, please try again!");
        }
      } else {
        console.warn(response.data.msg);
      }
    });
  }
  getdata()
  },[])

  const saveChanges=async()=>{
    await axios({
      method: "post",
      url: "https://api.santhoshaudios.in/git/push",
      data:{msg:commitMsg}
    }).then(async (response) => {
      if (response.data.status) {
        try {
          Alert.alert('Santhosh Audios','Change updated')
          setOnCommit(false)
        } catch (error) {
          console.warn("Something went wrong, please try again!");
        }
      } else {
        console.warn(response.data.msg);
      }
    });
  }

  return (
    <View style={{ height: height }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.heading}>
          <MaterialCommunityIcons name="webpack" size={36} color="black" />
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>Maintenance</Text>
          <Text style={{fontSize:16,backgroundColor:'#4d5a93',color:'white',padding:10,  borderRadius: 20, margin:10}} onPress={()=>setOnCommit(true)}>Apply Changes</Text>
        </View>
        <View style={{paddingHorizontal:15}}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.analysisCard} >
            <Text style={{ fontSize: 24 }} onPress={()=>navigation.navigate('HomeEdit',{data:data.Home})}>Home</Text>
          </View>
          <View style={styles.analysisCard} >
            <Text style={{ fontSize: 24 }}  onPress={()=>navigation.navigate('AboutEdit',{data:data.About})} >About</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.analysisCard}>
            <Text style={{ fontSize: 24 }} onPress={()=>navigation.navigate('ServiceEdit',{data:data.Services})} >Service</Text>
          </View>
          <View style={styles.analysisCard} >
            <Text style={{ fontSize: 24 }} onPress={() => Linking.openURL('https://drive.google.com/drive/folders/1a11FzAZ4f1E0gzOvwQJ81BBmVcmTec7e?usp=share_link')} >Gallery</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.analysisCard} >
            <Text style={{ fontSize: 24 }} onPress={()=>navigation.navigate('ContactEdit',{data:data.Contact})}>Contact</Text>
          </View>
          <View style={styles.analysisCard}>
            <Text style={{ fontSize: 24 }}  onPress={()=>navigation.navigate('CountEdit')}>Count</Text>
          </View>
        </View>
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} />
      {onCommit && (
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
              Enter commit message to save your changes to git repository and push to website
            </Text>
            <CustomInput placeholder="Commit Message" value={commitMsg} setValue={setCommitMsg} />
            <CustomButton
              text="Update"
              onPress={saveChanges}
              type="primary"
            />
            <CustomButton
              text="Close"
              bgColor="#C41E3A"
              onPress={() => setOnCommit(false)}
              type="primary"
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  analysisCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 16,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    height: 180,
  },
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

export default WebEdit;
