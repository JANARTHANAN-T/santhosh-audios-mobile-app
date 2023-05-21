import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React,{useState, useLayoutEffect,useEffect} from "react";
import Entypo from "@expo/vector-icons/Entypo";
import BottomNavigation from "../../../src/components/BottomNavigation";
import CustomButton from '../../components/CustomButton'
import axios from "axios";
import AntDesign from "@expo/vector-icons/AntDesign";

const Home = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [message,setMessage]=useState(true)
  const [contacts,setContacts]=useState()
  const [count,setCount]=useState({})
  const [selectContact,setSelectContact]=useState(false)
  const [deleteAllContact,setDeleteAllContact]=useState(false)
  const [selectedContact,setSelectedContact]=useState()
  

  useLayoutEffect(() => {
    const getMessage = async () => {
      await axios({
      method: "get",
      url: "http://192.168.106.146:5000/message",
    }).then(async (response) => {
      if (response.data.status) {
        try {
          setContacts(response.data.messages);
        } catch (error) {
          console.warn("Something went wrong, please try again!");
        }
      } else {
        console.warn(response.data.msg);
      }
    });
    };
    getMessage();
  }, []);

  useEffect(() => {
    const getCount = async () => {
      await axios({
      method: "get",
      url: "http://192.168.106.146:5000/viewcount/retrieve",
    }).then(async (response) => {
      if (response.data.status) {
        try {
          await setCount(JSON.parse(response.data.json));
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

  return (
    <View style={{ height: height }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.heading}>
          <Entypo name="home" size={36} color="black" />
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>Home</Text>
        </View>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <View style={styles.analysisCard}>
            <Text style={{fontSize:22,width:124}}>Visit Count</Text>
            {/* <Text style={{ fontSize: 16 }}></Text> */}
            <Text style={{ fontSize: 32, marginVertical: 10 }}>{count.visits}</Text>
          </View>
          <View style={styles.analysisCard}>
            <Text style={{fontSize:22,width:124}}>Page View</Text>
            {/* <Text style={{ fontSize: 16 }}>January 2023</Text> */}
            <Text style={{ fontSize: 32, marginVertical: 10 }}>{count.pageviews}</Text>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <View  style={styles.btn}>
          <CustomButton text='Contact' onPress={()=>setMessage(true)}  type='primary' bgColor={message?'':'white'} textColor={message?'':'black'} />
          </View>
          <View style={styles.btn}>
          <CustomButton text='Quotation' onPress={()=>setMessage(false)}  type='primary' bgColor={!message?'':'white'} textColor={!message?'':'black'} />
          </View>
        </View>
        <View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:30,marginTop:20}}>
          <Text style={{fontSize:22,}}>User Messages</Text>
          <Text style={{fontSize:18, color:'red'}} onPress={()=>setDeleteAllContact(true)}>Clear</Text>
        </View>
        {message ?
        <View>
          {contacts?.filter(e=>(e.status===false && e.isquotation===false)).map((ele,index)=>{
            return(
          <View style={styles.userCard} key={index}>
            <View>
              <Text style={{fontSize:17,fontWeight:"500"}}>{ele.name}</Text>
              <Text>{ele.email}</Text>
            </View>
            <View>
            <AntDesign
                      name="right"
                      size={28}
                      color="black"
                      onPress={() => {
                        setSelectedContact(ele)
                        setSelectContact(true);
                      }}
                    />
            </View>
          </View>
            )
          })}
          {contacts?.filter(e=>(e.status===true && e.isquotation===false)).map((ele,index)=>{
            return(
          <View style={[styles.userCard,{backgroundColor: "#dbdad7",}]} key={index}>
            <View>
              <Text style={{fontSize:17,fontWeight:"500"}}>{ele.name}</Text>
              <Text>{ele.email}</Text>
            </View>
            <View>
            <AntDesign
                      name="right"
                      size={28}
                      color="black"
                      onPress={() => {
                        setSelectedContact(ele)
                        setSelectContact(true);
                      }}
                    />
            </View>
          </View>
            )
          })}
          </View>:
          <View>
          {contacts?.filter(e=>(e.status===false && e.isquotation===true)).map((ele,index)=>{
            return(
          <View style={styles.userCard} key={index}>
            <View>
              <Text style={{fontSize:17,fontWeight:"500"}}>{ele.name}</Text>
              <Text>{ele.email}</Text>
            </View>
            <View>
            <AntDesign
                      name="right"
                      size={28}
                      color="black"
                      onPress={() => {
                        setSelectedContact(ele)
                        setSelectContact(true);
                      }}
                    />
            </View>
          </View>
            )
          })}
          {contacts?.filter(e=>(e.status===true && e.isquotation===true)).map((ele,index)=>{
            return(
          <View style={[styles.userCard,{backgroundColor: "#dbdad7",}]} key={index}>
            <View>
              <Text style={{fontSize:17,fontWeight:"500"}}>{ele.name}</Text>
              <Text>{ele.email}</Text>
            </View>
            <View>
            <AntDesign
                      name="right"
                      size={28}
                      color="black"
                      onPress={() => {
                        setSelectedContact(ele)
                        setSelectContact(true);
                      }}
                    />
            </View>
          </View>
            )
          })}
          </View>
        }
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} />
      {selectContact && (
        <View
          style={{
            height: "103%",
            width: "100%",
            zIndex: 10,
            position: "absolute",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          }}
        >
          <View style={styles.selectContact}>
          {console.log(selectContact)}
            <View>
              <Text style={{fontSize: 20, fontWeight: "300", marginBottom:5}}><Text style={{fontWeight:'400'}}>Name:</Text> {selectedContact.name}</Text>
              <Text style={{fontSize: 20, fontWeight: "300", marginBottom:5}}><Text style={{fontWeight:'400'}}>Email:</Text> {selectedContact.email}</Text>
              <Text style={{fontSize: 20, fontWeight: "300", marginBottom:5}}><Text style={{fontWeight:'400'}}>Mobile:</Text> {selectedContact.phonenumber}</Text>
              {!selectedContact.isquotation ?
              <Text style={{fontSize: 20, fontWeight: "300", marginBottom:5}}><Text style={{fontWeight:'400',marginBottom:5}}>Message:</Text>{"\n"}{selectedContact.message}{"\n"}</Text>
               : <Text style={{fontSize:18, marginVertical:10}}>Please do refer your mail for more detail</Text>
                            }
              </View>
              <View >
            <CustomButton
              text="Make as seen"
              onPress={() => {
                  axios({
                    method: "put",
                    url: `https://api.santhoshaudios.in/message/${selectedContact._id}`,
                  }).then(async (response) => {
                    if (response.data.status) {
                      try {
                        setContacts(response.data.message)
  
                      } catch (error) {
                        console.log("Something went wrong, please try again!");
                      }
                    } else {
                      console.log(response.data.msg);
                    }
                  });
                // }
                setSelectContact(false);
              }}
              type="primary"
            />
            <CustomButton
              text="Delete"
              bgColor="#961717"
              onPress={() => {
                  axios({
                    method: "delete",
                    url: `https://api.santhoshaudios.in/message/${selectedContact._id}`,
                  }).then(async (response) => {
                    if (response.data.status) {
                      try {
                        setContacts(response.data.message)
  
                      } catch (error) {
                        console.log("Something went wrong, please try again!");
                      }
                    } else {
                      console.log(response.data.msg);
                    }
                  });
                // }
                setSelectContact(false);
              }}
              type="primary"
            />

              </View>
            <CustomButton
              text="Close"
              bgColor="#C41E3A"
              onPress={() => setSelectContact(false)}
              type="primary"
            />
          </View>
        </View>
      )}
      {deleteAllContact &&
        <View
          style={{
            height: "103%",
            width: "100%",
            zIndex: 10,
            position: "absolute",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          }}
        >
          <View style={styles.selectContact}>
            <View>
              <Text style={{fontSize: 18, fontWeight: "300", marginBottom:25}}>This is to confirm that by pressing <Text style={{fontWeight:'500'}}>Delete All</Text> button, all the content in message section is deleted and you can't retrieve it back.</Text>
              </View>
              <View >
            <CustomButton
              text="Delete All"
              onPress={() => {
                  axios({
                    method: "delete",
                    url: `https://api.santhoshaudios.in/message`,
                  }).then(async (response) => {
                    if (response.data.status) {
                      try {
                        setContacts(response.data.message)
                      } catch (error) {
                        console.log("Something went wrong, please try again!");
                      }
                    } else {
                      console.log(response.data.msg);
                    }
                  });
                // }
                setDeleteAllContact(false);
              }}
              type="primary"
            />
              </View>
            <CustomButton
              text="Cancel"
              bgColor="#C41E3A"
              onPress={() => setDeleteAllContact(false)}
              type="primary"
            />
          </View>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  analysisCard: {
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  heading: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 64,
    justifyContent: "flex-start",
    margin: 20,
  },
  userCard: {
    marginHorizontal: 20,
    marginVertical: 5,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectContact: {
    marginHorizontal: 20,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  btnWrapper:{
    flexDirection:'row',
    backgroundColor:"#F9F7F7",
    borderRadius:20,
    marginHorizontal:20,
    marginTop:20
  },
  btn:{
    flex:1,
    
  }
});

export default Home;
