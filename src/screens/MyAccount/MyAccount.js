import React, { useLayoutEffect, useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import BottomNavigation from "../../../src/components/BottomNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

function MyAccount({ navigation }) {
  const { height } = useWindowDimensions();
  const [admins, setAdmins] = useState([]);
  const [user, setUser] = useState({});
  const [deleteUser, setDeleteUser] = useState("");
  const [deleteEmail, setDeleteEmail] = useState("");
  const [deleteID, setDeleteID] = useState("");
  const [ondeleteUser, setOnDeleteUser] = useState(false);

  useLayoutEffect(() => {
    const getUser = async () => {
      var user_token = await AsyncStorage.getItem("authValue");
      setUser(JSON.parse(user_token));
    };
    getUser();
  }, []);

  const onSignUpPress = () => {
    console.warn("Change Password");
  };
  const onLogOutPress = () => {
    AsyncStorage.removeItem("authValue");
    navigation.navigate("LogIn");
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "http://192.168.163.146:5000/auth/user",
    }).then(async (response) => {
      if (response.data.status) {
        try {
          setAdmins(response.data.users);
        } catch (error) {
          console.warn("Something went wrong, please try again!");
        }
      } else {
        console.warn(response.data.msg);
      }
    });
  }, [admins]);
  return (
    <View style={{ height: height }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.heading}>
          <MaterialCommunityIcons
            name="account-circle"
            size={48}
            color="black"
          />
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>My Account</Text>
        </View>
        <View style={styles.account}>
          <Text style={{ fontSize: 24 }}>{user?.username}</Text>
          <Text style={{ fontSize: 18, paddingVertical: 5 }}>{user.email}</Text>
          <Text style={{ fontSize: 16, fontStyle: "italic" }}>
            {user.isadmin ? "Admin" : "sub-admin"}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16, marginTop: 15, color: "blue" }}
              onPress={onSignUpPress}
            >
              Change Password
            </Text>
            <Text
              style={{ fontSize: 16, marginTop: 15, color: "blue" }}
              onPress={onLogOutPress}
            >
              Log Out
            </Text>
          </View>
        </View>
        <View>
        <View>

        </View>
          <Text
            style={{ fontSize: 24, marginHorizontal: 30, marginVertical: 15 }}
          >
            All Users
          </Text>
          {admins
            .filter((a) => user._id !== a._id)
            ?.map((ele, index) => {
              return (
                <View style={styles.userCard} key={index}>
                  <View>
                    <Text>{ele.username}</Text>
                    <Text>{ele.email}</Text>
                  </View>
                  <View>
                    {ele.isadmin ? (
                      <MaterialIcons
                        name="admin-panel-settings"
                        size={32}
                        color="black"
                      />
                    ) : (
                      <FontAwesome name="user" size={32} color="black" />
                    )}
                  </View>
                  {user.isadmin && (
                    <AntDesign
                      name="deleteuser"
                      size={28}
                      color="red"
                      onPress={() => {
                        setDeleteUser(ele.email);
                        setDeleteID(ele._id);
                        setOnDeleteUser(true);
                      }}
                    />
                  )}
                </View>
              );
            })}
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} />
      {ondeleteUser && (
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
              To delete the account.Type the account email{" "}
              <Text style={{ fontWeight: "bold" }}>{deleteUser}</Text>
            </Text>
            <CustomInput
              placeholder="User Email"
              value={deleteEmail}
              setValue={setDeleteEmail}
            />
            <CustomButton
              text="Delete User"
              onPress={() => {
                if (deleteEmail === deleteUser) {
                  axios({
                    method: "delete",
                    url: `http://192.168.237.146:5000/auth/${deleteID}`,
                  }).then(async (response) => {
                    if (response.data.status) {
                      try {
                        setAdmins(response.data.users);
                      } catch (error) {
                        console.warn("Something went wrong, please try again!");
                      }
                    } else {
                      console.warn(response.data.msg);
                    }
                  });
                }
                setOnDeleteUser(false);
              }}
              type="primary"
            />
            <CustomButton
              text="Close"
              bgColor="#C41E3A"
              onPress={() => setOnDeleteUser(false)}
              type="primary"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 64,
    justifyContent: "flex-start",
    margin: 20,
  },
  account: {
    flex: 1,
    marginHorizontal: 20,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  deleteUserCard: {
    marginHorizontal: 50,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
});

export default MyAccount;
