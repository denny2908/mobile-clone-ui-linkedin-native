import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import ProfileData from '../components/ProfileData'

const Profile = () => {
  const navigation=useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Expo',
      headerTitleAlign: 'center',
      headerRight:()=> (
        <Ionicons name='settings-outline' size={24} color='black'/>
      ),
    })
  })
  return (
    <SafeAreaView>
      <View>
        <ProfileData />
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})