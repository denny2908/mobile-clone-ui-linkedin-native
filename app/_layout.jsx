import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import "../global.css"

const RootLayout = () => {
  const [signIn, setSignIn] = useState(true);
  const router=useRouter()
  useEffect(()=>{
    if(!signIn){
      router.push("/signin");
    }
  },[signIn])
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(drawer)" />
    </Stack>
  ) 
}

export default RootLayout

const styles = StyleSheet.create({})