import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions } from 'react-native';
import blob from "../assets/blob.svg"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const LoginScreen = (props) => {
  const [text, onChangeText] = React.useState("");
  const { onPress, title = 'Save' } = props;

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
        <View style={styles.userName}>
          <Text style={styles.userNameLabel}>Email or Phone number</Text>
          <TextInput
            style={styles.userNameInput}
            placeholder="Type here..."
            textAlign='left'
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={styles.userName}>
          <Text style={styles.userNameLabel}>Password</Text>
          <TextInput
            style={styles.userNameInput}
            placeholder="Type here..."
            textAlign='left'
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8} style={styles.loginBtn} onPress={onPress}>
          <Text style={styles.appButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView >
  );
};

export default LoginScreen

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
    width: windowWidth + 120,
    height: windowWidth + 100,
    backgroundColor: "#091B06",
    left: -50,
    bottom: -80,
    borderRadius: 280,
    flex: 1,
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  image: {
    justifyContent: "center",
    width: 300,
    height: 300,
    marginTop: 30,
  },
  userNameLabel: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "flex-start",
    textAlign: "left",
    textTransform: "none"
  },
  userNameInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 6,
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "transparent",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: windowWidth - 40,
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
    width: windowWidth / 2,
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "none"
  },
});
