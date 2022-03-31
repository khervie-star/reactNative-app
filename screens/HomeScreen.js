import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import blob from "../assets/blob.svg"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const LoadOut = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.brand}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/logo.png')}
        />
        <Text style={styles.brandName}>BetterCode.</Text>
        <Text style={styles.brandDesc}>Code yourself better</Text>
      </View>

      <View style={styles.footer}>
        <ImageBackground source={blob} resizeMode="cover" style={styles.image}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Login')}
            style={styles.loginBtn}
          >
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8} style={styles.signUpBtn} onPress={null}>
            <Text style={styles.signUpBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

    </SafeAreaView>
  );
};

export default LoadOut

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fafafa",
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    position: 'absolute',
    bottom: windowHeight - 300,
  },
  tinyLogo: {
    width: 600,
    height: 100,
  },
  brandName: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#61A754",
    textAlign: "center"
  },
  brandDesc: {
    fontWeight: "500",
    fontSize: 15,
    color: "#61A754",
    textAlign: "center"
  },
  footer: {
    position: 'absolute',
    width: windowWidth + 100,
    height: windowWidth + 100,
    backgroundColor: "#091B06",
    left: -50,
    bottom: -200,
    borderRadius: 250,
    flex: 1,
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    width: 300,
    height: 300,
    marginTop: 30,
  },
  loginBtn: {
    elevation: 8,
    backgroundColor: "#61A754",
    borderWidth: 2,
    borderColor: "#61A754",
    borderRadius: 28,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "none"
  },
  signUpBtn: {
    elevation: 8,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#61A754",
    borderRadius: 28,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,

  },
  signUpBtnText: {
    fontSize: 20,
    color: "#61A754",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "none",
  },
});
