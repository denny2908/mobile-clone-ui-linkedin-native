import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { useAuth, useSignIn } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo' 
import * as WebBrowser from 'expo-web-browser'
import * as SecureStore from "expo-secure-store";

const SignIn = () => {
  const [toggle, setToggle]=useState(false);
  const [signIn, setActive, isLoaded]=useSignIn();
  const [isSignedIn, getToken]=useAuth();
  const router=useRouter();
  const [emailAddress, setEmailAddress]=React.useState("");
  const [password, setPassword]=React.useState("");
  // check for existing session on component mount
  useEffect(() => {
    checkExistingSession();
  }, [isSignedIn])

  const checkExistingSession = async () => {
    try{
      if (isSignedIn){
        //if user already signed in, redirect to home
        router.push("/");
        return;
      }
      const token = await getToken();
      if (token){
        router.push("/");
      }
    } catch(error){
      console.error("Error Checking Existing Session", error);
      // Clear stored data if there's an error
      await SecureStore.deleteItemAsync("sessionToken");
    }
  };

  // Enhanced authentication handler with persistence
  const handleAuthentication = React.useCallback(
    async (sessionId) => {
      try {
        await setActive({session: sessionId});
        //store session token
        await SecureStore.setItemAsync("sessionToken", sessionId );
        router.push("/");
      }catch (error) {
        console.error("Error setting active session:", error);
        Alert.alert(
          "Authentication Error",
          "Failed to Complete sign-in process."
        )
      }
    },
    [setActive, router]
  );

  //OAuth Google Sign-In Flow
  React.useEffect(() =>{
    WebBrowser.warmUpAsync();
    return()=>{
      WebBrowser.coolDownAsync();
    };
  }, []);

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google"
  });

  const onGoogleSignInPress = React.useCallback(async()=>{
    try {
      const { createdSessionId } = await startOAuthFlow({
        redirectUrl: Linking.createURL("/", {scheme:"myapp"})
      });
      if (createdSessionId){
        await handleAuthentication (createdSessionId);
      } else {
        console.log("No session created, additional steps may be required");
      }
    } catch (err) {
      console.error("OAuth error", JSON.stringify(err, null, 2));
      Alert.alert(
        "Google Sign-In Error",
        err.message || " An error occured during Google Sign-In."
      );
    }
  }, [handleAuthentication]);

  // Email and password sign-in flow
  const onEmailSignInPress = React.useCallback(async()=>{
    if (!isLoaded) {
      return;
    }
    try{
      const signInAttempt = await signIn.create({
        identifier: emailAddress, password,
      });
      if (signInAttempt.status === "complete"){
        await handleAuthentication(signInAttempt.createdSessionId)
      } else {
        console.log("Sign-In not complete, status:", signInAttempt.status);
        Alert.alert("Sign-In Error", "Sign-In requires further steps.");
      }
    } catch (err) {
      console.error("Email sign-in error", err);
      Alert.alert(
        "Sign-In Error",
        err.message || "An error occured during sign-in."
      );  
    }
  }, [isLoaded, emailAddress, password, handleAuthentication]);

  return (
    <SafeAreaView className="bg-white h-screen flex-1">

      <View className="flex flex-col justify-center h-[80%] items-center gap-4">
        <Text className="text-6xl">Sign In</Text>
        {/* email */}
        <View className="border border-black w-[300px] rounded-lg my-2 ">
          <TextInput placeholder='Email or Phone' className="text-xl py-3 px-2"/>
        </View>
        {/* Password */}
        <View className="border flex flex-row justify-between items-center px-3 border-black w-[300px] rounded-lg  ">
          <TextInput 
            placeholder='Password' 
            secureTextEntry={toggle}
            className="text-xl py-3 px-2"
          />
          <TouchableOpacity activeOpacity={0.5} onPress={()=>setToggle(!toggle)}>
          <Text className="text-blue-500 text-lg">show</Text>
          </TouchableOpacity>
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