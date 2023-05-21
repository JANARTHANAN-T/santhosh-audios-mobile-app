import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import { Ionicons,MaterialCommunityIcons,MaterialIcons,AntDesign,FontAwesome,Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    MaterialCommunityIcons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
    MaterialIcons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'),
    AntDesign: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf'),
    FontAwesome: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf'),
    Entypo: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Entypo.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
        <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
});
