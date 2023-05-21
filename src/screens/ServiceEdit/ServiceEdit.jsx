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

const ServiceEdit = ({ navigation, route }) => {
  const { height } = useWindowDimensions();
  const [CarAudios1,setCarAudios1]=useState(route.params.data[0].Description[0])
  const [CarAudios2,setCarAudios2]=useState(route.params.data[0].Description[1])
  const [CarAudios3,setCarAudios3]=useState(route.params.data[0].Description[2])
  const [CarAudios4,setCarAudios4]=useState(route.params.data[0].Description[3])
  const [CarAudios5,setCarAudios5]=useState(route.params.data[0].Description[4])
  const [CarAudios6,setCarAudios6]=useState(route.params.data[0].Description[5])
  const [CarAudios7,setCarAudios7]=useState(route.params.data[0].Description[6])
  const [CarAudios8,setCarAudios8]=useState(route.params.data[0].Description[7])
  const [CarAudios9,setCarAudios9]=useState(route.params.data[0].Description[8])
  const [CarAudios10,setCarAudios10]=useState(route.params.data[0].Description[9])
  const [CarAccessories1,setCarAccessories1]=useState(route.params.data[1].Description[0])
  const [CarAccessories2,setCarAccessories2]=useState(route.params.data[1].Description[1])
  const [CarAccessories3,setCarAccessories3]=useState(route.params.data[1].Description[2])
  const [CarAccessories4,setCarAccessories4]=useState(route.params.data[1].Description[3])
  const [CarAccessories5,setCarAccessories5]=useState(route.params.data[1].Description[4])
  const [CarAccessories6,setCarAccessories6]=useState(route.params.data[1].Description[5])
  const [CarAccessories7,setCarAccessories7]=useState(route.params.data[1].Description[6])
  const [CarAccessories8,setCarAccessories8]=useState(route.params.data[1].Description[7])
  const [CarAccessories9,setCarAccessories9]=useState(route.params.data[1].Description[8])
  const [CarAccessories10,setCarAccessories10]=useState(route.params.data[1].Description[9])
  const [HomeAudios1,setHomeAudios1]=useState(route.params.data[2].Description[0])
  const [HomeAudios2,setHomeAudios2]=useState(route.params.data[2].Description[1])
  const [HomeAudios3,setHomeAudios3]=useState(route.params.data[2].Description[2])
  const [HomeAudios4,setHomeAudios4]=useState(route.params.data[2].Description[3])
  const [HomeAudios5,setHomeAudios5]=useState(route.params.data[2].Description[4])
  const [HomeAudios6,setHomeAudios6]=useState(route.params.data[2].Description[5])
  const [HomeAudios7,setHomeAudios7]=useState(route.params.data[2].Description[6])
  const [HomeAudios8,setHomeAudios8]=useState(route.params.data[2].Description[7])
  const [HomeAudios9,setHomeAudios9]=useState(route.params.data[2].Description[8])
  const [HomeAudios10,setHomeAudios10]=useState(route.params.data[2].Description[9])
  const [VanBusAudios1,setVanBusAudios1]=useState(route.params.data[3].Description[0])
  const [VanBusAudios2,setVanBusAudios2]=useState(route.params.data[3].Description[1])
  const [VanBusAudios3,setVanBusAudios3]=useState(route.params.data[3].Description[2])
  const [VanBusAudios4,setVanBusAudios4]=useState(route.params.data[3].Description[3])
  const [VanBusAudios5,setVanBusAudios5]=useState(route.params.data[3].Description[4])
  const [VanBusAudios6,setVanBusAudios6]=useState(route.params.data[3].Description[5])
  const [VanBusAudios7,setVanBusAudios7]=useState(route.params.data[3].Description[6])
  const [VanBusAudios8,setVanBusAudios8]=useState(route.params.data[3].Description[7])
  const [VanBusAudios9,setVanBusAudios9]=useState(route.params.data[3].Description[8])
  const [VanBusAudios10,setVanBusAudios10]=useState(route.params.data[3].Description[9])
  const [VanBusLighting1,setVanBusLighting1]=useState(route.params.data[4].Description[0])
  const [VanBusLighting2,setVanBusLighting2]=useState(route.params.data[4].Description[1])
  const [VanBusLighting3,setVanBusLighting3]=useState(route.params.data[4].Description[2])
  const [VanBusLighting4,setVanBusLighting4]=useState(route.params.data[4].Description[3])
  const [VanBusLighting5,setVanBusLighting5]=useState(route.params.data[4].Description[4])
  const [VanBusLighting6,setVanBusLighting6]=useState(route.params.data[4].Description[5])
  const [VanBusLighting7,setVanBusLighting7]=useState(route.params.data[4].Description[6])
  const [VanBusLighting8,setVanBusLighting8]=useState(route.params.data[4].Description[7])
  const [VanBusLighting9,setVanBusLighting9]=useState(route.params.data[4].Description[8])
  const [VanBusLighting10,setVanBusLighting10]=useState(route.params.data[4].Description[9])
  const [OtherServices1,setOtherServices1]=useState(route.params.data[5].Description[0])
  const [OtherServices2,setOtherServices2]=useState(route.params.data[5].Description[1])
  const [OtherServices3,setOtherServices3]=useState(route.params.data[5].Description[2])
  const [OtherServices4,setOtherServices4]=useState(route.params.data[5].Description[3])
  const [OtherServices5,setOtherServices5]=useState(route.params.data[5].Description[4])
  const [OtherServices6,setOtherServices6]=useState(route.params.data[5].Description[5])
  const [OtherServices7,setOtherServices7]=useState(route.params.data[5].Description[6])
  const [OtherServices8,setOtherServices8]=useState(route.params.data[5].Description[7])
  const [OtherServices9,setOtherServices9]=useState(route.params.data[5].Description[8])
  const [OtherServices10,setOtherServices10]=useState(route.params.data[5].Description[9])
  const [onUpdate,setOnUpdate]=useState(false)

  const updateContent = async() =>{
    await axios({
      method: "put",
      url: "https://api.santhoshaudios.in/edit/data",
      data:{key:"Services",value:[{Title:"Car Audios",Description:[CarAudios1,CarAudios2,CarAudios3,CarAudios4,CarAudios5,CarAudios6,CarAudios7,CarAudios8,CarAudios9,CarAudios10]},{Title:"Car Accessories",Description:[CarAccessories1,CarAccessories2,CarAccessories3,CarAccessories4,CarAccessories5,CarAccessories6,CarAccessories7,CarAccessories8,CarAccessories9,CarAccessories10]},{Title:"Home Audios",Description:[HomeAudios1,HomeAudios2,HomeAudios3,HomeAudios4,HomeAudios5,HomeAudios6,HomeAudios7,HomeAudios8,HomeAudios9,HomeAudios10]},{Title:"Van/Bus Audios",Description:[VanBusAudios1,VanBusAudios2,VanBusAudios3,VanBusAudios4,VanBusAudios5,VanBusAudios6,VanBusAudios7,VanBusAudios8,VanBusAudios9,VanBusAudios10]},{Title:"Van/Bus Lighting",Description:[VanBusLighting1,VanBusLighting2,VanBusLighting3,VanBusLighting4,VanBusLighting5,VanBusLighting6,VanBusLighting7,VanBusLighting8,VanBusLighting9,VanBusLighting10]},{Title:"Other Services",Description:[OtherServices1,OtherServices2,OtherServices3,OtherServices4,OtherServices5,OtherServices6,OtherServices7,OtherServices8,OtherServices9,OtherServices10]}]}
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
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>Service Page Edit</Text>
        </View>
        <View style={{marginTop:20}}>
        <Text style={{fontSize:24,marginVertical:20, marginHorizontal:30,color:'#4d5a93',fontWeight:'bold'}}>Car Audios</Text>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 1</Text>
          <CustomInput placeholder="Description 1" value={CarAudios1} setValue={setCarAudios1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 2</Text>
          <CustomInput placeholder="Description 2" value={CarAudios2} setValue={setCarAudios2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 3</Text>
          <CustomInput placeholder="Description 3" value={CarAudios3} setValue={setCarAudios3} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 4</Text>
          <CustomInput placeholder="Description 4" value={CarAudios4} setValue={setCarAudios4} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 5</Text>
          <CustomInput placeholder="Description 5" value={CarAudios5} setValue={setCarAudios5} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 6</Text>
          <CustomInput placeholder="Description 6" value={CarAudios6} setValue={setCarAudios6} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 7</Text>
          <CustomInput placeholder="Description 7" value={CarAudios7} setValue={setCarAudios7} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 8</Text>
          <CustomInput placeholder="Description 8" value={CarAudios8} setValue={setCarAudios8} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 9</Text>
          <CustomInput placeholder="Description 9" value={CarAudios9} setValue={setCarAudios9} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 10</Text>
          <CustomInput placeholder="Description 10" value={CarAudios10} setValue={setCarAudios10} />
        </View>
        <Text style={{fontSize:24,marginVertical:20, marginHorizontal:30,color:'#4d5a93',fontWeight:'bold'}}>Car Accessories</Text>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 1</Text>
          <CustomInput placeholder="Description 1" value={CarAccessories1} setValue={setCarAccessories1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 2</Text>
          <CustomInput placeholder="Description 2" value={CarAccessories2} setValue={setCarAccessories2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 3</Text>
          <CustomInput placeholder="Description 3" value={CarAccessories3} setValue={setCarAccessories3} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 4</Text>
          <CustomInput placeholder="Description 4" value={CarAccessories4} setValue={setCarAccessories4} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 5</Text>
          <CustomInput placeholder="Description 5" value={CarAccessories5} setValue={setCarAccessories5} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 6</Text>
          <CustomInput placeholder="Description 6" value={CarAccessories6} setValue={setCarAccessories6} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 7</Text>
          <CustomInput placeholder="Description 7" value={CarAccessories7} setValue={setCarAccessories7} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 8</Text>
          <CustomInput placeholder="Description 8" value={CarAccessories8} setValue={setCarAccessories8} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 9</Text>
          <CustomInput placeholder="Description 9" value={CarAccessories9} setValue={setCarAccessories9} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 10</Text>
          <CustomInput placeholder="Description 10" value={CarAccessories10} setValue={setCarAccessories10} />
        </View>
       
        <Text style={{fontSize:24,marginVertical:20, marginHorizontal:30,color:'#4d5a93',fontWeight:'bold'}}>Home Audios</Text>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 1</Text>
          <CustomInput placeholder="Description 1" value={HomeAudios1} setValue={setHomeAudios1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 2</Text>
          <CustomInput placeholder="Description 2" value={HomeAudios2} setValue={setHomeAudios2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 3</Text>
          <CustomInput placeholder="Description 3" value={HomeAudios3} setValue={setHomeAudios3} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 4</Text>
          <CustomInput placeholder="Description 4" value={HomeAudios4} setValue={setHomeAudios4} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 5</Text>
          <CustomInput placeholder="Description 5" value={HomeAudios5} setValue={setHomeAudios5} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 6</Text>
          <CustomInput placeholder="Description 6" value={HomeAudios6} setValue={setHomeAudios6} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 7</Text>
          <CustomInput placeholder="Description 7" value={HomeAudios7} setValue={setHomeAudios7} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 8</Text>
          <CustomInput placeholder="Description 8" value={HomeAudios8} setValue={setHomeAudios8} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 9</Text>
          <CustomInput placeholder="Description 9" value={HomeAudios9} setValue={setHomeAudios9} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 10</Text>
          <CustomInput placeholder="Description 10" value={HomeAudios10} setValue={setHomeAudios10} />
        </View>
        <Text style={{fontSize:24,marginVertical:20, marginHorizontal:30,color:'#4d5a93',fontWeight:'bold'}}>Van/Bus Audios</Text>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 1</Text>
          <CustomInput placeholder="Description 1" value={VanBusAudios1} setValue={setVanBusAudios1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 2</Text>
          <CustomInput placeholder="Description 2" value={VanBusAudios2} setValue={setVanBusAudios2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 3</Text>
          <CustomInput placeholder="Description 3" value={VanBusAudios3} setValue={setVanBusAudios3} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 4</Text>
          <CustomInput placeholder="Description 4" value={VanBusAudios4} setValue={setVanBusAudios4} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 5</Text>
          <CustomInput placeholder="Description 5" value={VanBusAudios5} setValue={setVanBusAudios5} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 6</Text>
          <CustomInput placeholder="Description 6" value={VanBusAudios6} setValue={setVanBusAudios6} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 7</Text>
          <CustomInput placeholder="Description 7" value={VanBusAudios7} setValue={setVanBusAudios7} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 8</Text>
          <CustomInput placeholder="Description 8" value={VanBusAudios8} setValue={setVanBusAudios8} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 9</Text>
          <CustomInput placeholder="Description 9" value={VanBusAudios9} setValue={setVanBusAudios9} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 10</Text>
          <CustomInput placeholder="Description 10" value={VanBusAudios10} setValue={setVanBusAudios10} />
        </View>
        <Text style={{fontSize:24,marginVertical:20, marginHorizontal:30,color:'#4d5a93',fontWeight:'bold'}}>Van/Bus Lighting</Text>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 1</Text>
          <CustomInput placeholder="Description 1" value={VanBusLighting1} setValue={setVanBusLighting1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 2</Text>
          <CustomInput placeholder="Description 2" value={VanBusLighting2} setValue={setVanBusLighting2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 3</Text>
          <CustomInput placeholder="Description 3" value={VanBusLighting3} setValue={setVanBusLighting3} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 4</Text>
          <CustomInput placeholder="Description 4" value={VanBusLighting4} setValue={setVanBusLighting4} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 5</Text>
          <CustomInput placeholder="Description 5" value={VanBusLighting5} setValue={setVanBusLighting5} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 6</Text>
          <CustomInput placeholder="Description 6" value={VanBusLighting6} setValue={setVanBusLighting6} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 7</Text>
          <CustomInput placeholder="Description 7" value={VanBusLighting7} setValue={setVanBusLighting7} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 8</Text>
          <CustomInput placeholder="Description 8" value={VanBusLighting8} setValue={setVanBusLighting8} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 9</Text>
          <CustomInput placeholder="Description 9" value={VanBusLighting9} setValue={setVanBusLighting9} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 10</Text>
          <CustomInput placeholder="Description 10" value={VanBusLighting10} setValue={setVanBusLighting10} />
        </View>
        <Text style={{fontSize:24,marginVertical:20, marginHorizontal:30,color:'#4d5a93',fontWeight:'bold'}}>Other Services</Text>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 1</Text>
          <CustomInput placeholder="Description 1" value={OtherServices1} setValue={setOtherServices1} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 2</Text>
          <CustomInput placeholder="Description 2" value={OtherServices2} setValue={setOtherServices2} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 3</Text>
          <CustomInput placeholder="Description 3" value={OtherServices3} setValue={setOtherServices3} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 4</Text>
          <CustomInput placeholder="Description 4" value={OtherServices4} setValue={setOtherServices4} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 5</Text>
          <CustomInput placeholder="Description 5" value={OtherServices5} setValue={setOtherServices5} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 6</Text>
          <CustomInput placeholder="Description 6" value={OtherServices6} setValue={setOtherServices6} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 7</Text>
          <CustomInput placeholder="Description 7" value={OtherServices7} setValue={setOtherServices7} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 8</Text>
          <CustomInput placeholder="Description 8" value={OtherServices8} setValue={setOtherServices8} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 9</Text>
          <CustomInput placeholder="Description 9" value={OtherServices9} setValue={setOtherServices9} />
        </View>
        <View style={{marginHorizontal: 30, marginVertical:5}}>
          <Text style={{fontSize:20,marginBottom:10}}>Description 10</Text>
          <CustomInput placeholder="Description 10" value={OtherServices10} setValue={setOtherServices10} />
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

export default ServiceEdit;
