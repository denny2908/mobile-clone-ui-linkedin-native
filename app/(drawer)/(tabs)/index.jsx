import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { useAuth, useUser } from '@clerk/clerk-expo'

const index = () => {
  const navigation=useNavigation()
  const { signOut }=useAuth();
  const { user }= useUser();
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text className="">index</Text>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Button title='sign out' onPress={()=> signOut()} />
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})