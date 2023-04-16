import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const BottomNavigation = ({navigation}) => {
  return (
    <View style={styles.footer}>
    <View><Ionicons name="analytics-outline" size={32} color="black" onPress={()=>navigation.navigate('Home')} /></View>
    <View><MaterialIcons name="construction" size={32} color="black" onPress={()=>navigation.navigate('WebEdit')} /></View>
    <View><MaterialCommunityIcons name="account" size={32} color="black" onPress={()=>navigation.navigate('MyAccount')} /></View>
  </View>
  )
}

const styles = StyleSheet.create({
    footer: {
      position:'absolute',
      bottom: -15,
      backgroundColor:'#d0d0d0',
      width:'100%',
      height:54,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
  });

export default BottomNavigation