import { Image, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'


const CustomDrawer = (props) => {
  const router=useRouter()
  return (
      <DrawerContentScrollView {... props}>
        <View className="mx-6 h-screen">
          <TouchableOpacity onPress={()=>router.push("/profile")}>
            <Image 
              source={require('../assets/profile.png')} className="w-20 h-20" 
            />
          </TouchableOpacity>
            <View>
              <Text className="text-2xl font-bold">Deni Nuriman</Text>
              <Text className="text-lg">React Native | Expo</Text>
              <Text className="text-lg text-gray-500 font-bold" >Location</Text>
            </View>
            <View className="border-b border-gray-300 h-4 my-3" />
            <TouchableOpacity activeOpacity={0.8} className="bg-black rounded-2xl">
              <View className="py-3 rounded-2xl items-center flex flex-row px-2 border-dashed border-white border-2 m-[2px]">
                {/* icon */}
                <Entypo name='plus' size={24} color='white' />
                <Text className="text-white font-bold text-lg">Experience</Text>
              </View>
            </TouchableOpacity>
            <View className="border-b border-gray-300 h-4 my-2" />
            <View className="mx-3">
              <Text className='text-xl font-bold'>Save Post</Text>
              <Text className='text-xl font-bold'>Groups</Text>
            </View>
            <View className="border-b border-gray-300 h-4 my-2" />
            <View className="border-b border-gray-300 h-4 my-96" />
            <View className="absolute bottom-0 flex flex-row gap-2">
              {/* icon */}
              <Ionicons name='settings-outline' size={24} color='black' />
              <Text className="my-[1px] text-lg font-bold">Setting</Text>
            </View>    
        </View>
        <DrawerItemList {... props} />
      </DrawerContentScrollView> 
  )
}

export default CustomDrawer