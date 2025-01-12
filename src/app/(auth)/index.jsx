import { StyleSheet, Text, View, SafeAreaView, Image, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import images from '@/src/constants/ImagePath'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigateToWelcome = () => {
    try {
      const token = AsyncStorage.getItem("accessToken");
      if (token){
        router.push("/(main)")
      }else {
        router.push("/(auth)/welcome")

      }
    } catch (error) {
      
    }
  }

  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(true),
      setTimeout(navigateToWelcome, 5000)
    }, 4000)
  }, [])

  return (
  <SafeAreaView style={styles.container}>
    <View ></View>
    <View style={styles.body}>
      <Image  
       source={images.logo}
       style={styles.logo}
      />
      <Text style={styles.whatsappText}> Whatsapp</Text>
    </View>
    <View style={styles.footer}>
      {isLoading? 
      <>
       <ActivityIndicator size={50} color={"#0CCC83"}/>
       <Text style={styles.loadingText}>Loading...</Text>
      </> : 
      <>
      <Text style={styles.fromText}>From</Text>
      <Text style={styles.facebookText}>FACEBOOK</Text>
      </>
      }
    </View>
  </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 25
  },

  body: {
   alignItems: "center",
   gap: 8
  },
  footer: {
   alignItems: "center",
   height: 60,
   justifyContent: "flex-end",
   paddingBottom: 8,
   gap: 6
},
  fromText: {
    fontSize: 15
  },
  facebookText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  logo: {
    height: 70,
    width: 70,
    borderRadius: 10
  },
  whatsappText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  loadingText: {
    fontSize: 20,
    fontWeight: "bold",
  }

})