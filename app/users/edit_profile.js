import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {router, useNavigation } from "expo-router";

function owner_pfp() {
  
  const navigate = useNavigation();
  return (
    <View style={styles.container}>

        {/*Profile picture */}
        <Image
            source= {require('../../assets/images/png/profile-pic-holder.webp')}
            style={styles.profilePicture}
        />

        {/*edit profile picture*/}
        <Text style={styles.editProfilePicture}>Edit Profile Picture</Text>

        {/*Profile banner */}
        <Image
            source={require('../../assets/images/png/profile-banner-placeholder.png')}
            style={styles.profileBanner} 
        />

        {/*change profile banner*/}
        <Text style={styles.editProfileBanner}>Edit Profile Banner</Text>

        {/*Username*/}
        <Text style={styles.profileUsername}>@profile-username</Text>

        {/*Name*/}
        <Text style={styles.Name}>Name</Text>

        {/*Username*/}
        <Text style={styles.Bio}>Bio</Text>

        <Pressable style={styles.backArrowHitBox}
                onPress={() => {navigate.goBack()}}>
            <Image style={styles.backArrow} source={require('../../assets/images/png/backArrow.png')} />
        </Pressable>

        


</View>
  );
}

 {/* Styling */}

 const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#010C80',
    },

  
    SettingsIcon: {
        position: 'absolute',
        width:40,
        height: 40,
        top:5,
        right:5,
        zIndex:2,
        color: "black",
    },

    profilePicture: {
        position: 'absolute',
        width: 100, 
        height: 100,
        top: 200,
        borderRadius: 50,
        backgroundColor: 'fff',
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        zIndex: 1,
    },

    editProfilePicture:{ 
        position: 'absolute',
        color: '#010C80',
        height: 150,
        top: 250,
        right: 150,
        fontSize: 9,
        fontWeight: 'bold',
        zIndex: 3,
    },  

    
    profileBanner: {
        position: 'absolute',
        borderRadius: 10,
        width: '85%',
        height: 200,
        top: 50,
        borderWidth: 2,
        borderColor: 'white',
        zIndex: 0,
    },
    
    editProfileBanner:{
        position: 'absolute',
        color: '#010C80',
        height: 150,
        top: 230,
        right: 40,
        fontSize: 10,
        fontWeight: 'bold',
    }, 

    profileUsername: {
        color: '#F8FAFC',
        fontFamily: 'Cabin Condensed',
        fontWeight: 'bold',
        position: 'absolute',
        top: 310, 
        
    },


    editProfileButton:{
        position: 'absolute',
        backgroundColor: 'white',
        paddingVertical:8,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignSelf: 'center',
        bottom: 0,
    },

    editProfileButtonText:{
        color: 'black',
        fontFamily: 'CabinCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 18,

    },



    Name: {
        color: '#F8FAFC',
        fontFamily: 'Cabin Condensed',
        fontWeight: 'bold',
        position: 'absolute',
        top: 350, 
        left: 30,
        fontSize: 22,  
        
      },
    Bio: {
        color: '#F8FAFC',
        fontFamily: 'Cabin Condensed',
        fontWeight: 'bold',
        position: 'absolute',
        top: 400, 
        left: 30,
        fontSize: 22,
        
      },
    backArrowHitBox: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 5,
        right: 5,
    },
     
    backArrow: {
        tintColor: 'white',
        width: 35,
        height: 35,
    }

   
 })

export default owner_pfp;