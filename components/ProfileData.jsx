import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const ProfileData = () => {
  return (
    <ScrollView>
        <View>
          <Image source={require('../assets/image.png')}
          className='w-screen h-40'
          />
          <TouchableOpacity className='absolute right-4 py-4'>
            <AntDesign name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between items-center -mt-10 px-4'>
          <Image source={require('../assets/profile.png')}
          className='w-28 h-28 border-white border-4 rounded-full'
          />
          {/*Edit Icon*/}
          <TouchableOpacity>
            <AntDesign name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default ProfileData

const styles = StyleSheet.create({})