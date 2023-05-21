import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Linking
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomNavigation from "../../../src/components/BottomNavigation";

const WebEdit = ({ navigation }) => {
  const { height } = useWindowDimensions();
  return (
    <View style={{ height: height }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.heading}>
          <MaterialCommunityIcons name="webpack" size={36} color="black" />
          <Text style={{ fontSize: 28, marginHorizontal: 5 }}>Maintenance</Text>
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
            <Text style={{ fontSize: 24 }} onPress={()=>navigation.navigate('HomeEdit')}>Home</Text>
          </View>
          <View style={styles.analysisCard} >
            <Text style={{ fontSize: 24 }}  onPress={()=>navigation.navigate('AboutEdit')} >About</Text>
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
            <Text style={{ fontSize: 24 }} onPress={()=>navigation.navigate('ServiceEdit')} >Service</Text>
          </View>
          <View style={styles.analysisCard} >
            <Text style={{ fontSize: 24 }} onPress={() => Linking.openURL('http://google.com')} >Gallery</Text>
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
            <Text style={{ fontSize: 24 }} onPress={()=>navigation.navigate('ContactEdit')}>Contact</Text>
          </View>
          <View style={styles.analysisCard}>
            <Text style={{ fontSize: 24 }}  onPress={()=>navigation.navigate('CountEdit')}>Count</Text>
          </View>
        </View>
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} />
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
    height: 190,
  },
  heading: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 64,
    justifyContent: "flex-start",
    margin: 20,
  },
});

export default WebEdit;
