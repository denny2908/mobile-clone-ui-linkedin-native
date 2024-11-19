import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const index = () => {
  const navigation=useNavigation()
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text className="">index</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})