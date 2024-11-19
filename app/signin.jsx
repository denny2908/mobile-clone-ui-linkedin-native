import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-screen flex-1">

      <View className="flex flex-col justify-center h-[80%] items-center gap-4">
        <Text className="text-6xl">Sign In</Text>
        {/* email */}
        <View className="border border-black w-[300px] rounded-lg my-2 ">
          <TextInput placeholder='Email or Phone' className="text-xl py-3 px-2"/>
        </View>
        {/* Password */}
        <View className="border border-black w-[300px] rounded-lg  ">
          <TextInput placeholder='Password' secureTextEntry className="text-xl py-3 px-2"/>
        </View>
        <Text className="text-blue-500 font-bold text-lg">Forgot Password ?</Text>
        {/* Button */}
        <TouchableOpacity className="bg-blue-500 my-2 rounded-3xl py-4 w-[300px]">
          <Text className="text-white text-lg text-center">Sign In</Text>
        </TouchableOpacity>
        <Text>OR</Text>

        {/* Sign In With Google */}
        <View className="border border-gray-400 rounded-3xl px-24 py-3 flex flex-row items-center gap-2">
          <Image source={require("../assets/google.png")} className="h-4 w-4" />
          <Text>Sign In With Google</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})