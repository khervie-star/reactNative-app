import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const App = (props) => {
  const [text, onChangeText] = React.useState("");
  const { onPress, title = 'Save' } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Hello,{"\n"}Login Now.</Text>
      <Text style={styles.createNew}>Don't have an account? <Text style={styles.createNewLink}>Create New Account</Text></Text>

      <TextInput
        style={styles.userNameInput}
        placeholder="Username"
        textAlign='left'
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.userNameInput}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Password"
        keyboardType="numeric"
      />

      <Text style={styles.createNew}>Forgot Passcode? <Text style={styles.createNewLink}>Reset</Text></Text>
      <Pressable style={styles.loginBtn} onPress={onPress}>
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
      <Text style={styles.skip}>Skip</Text>

    </SafeAreaView>
  );
};

export default App

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fafafa",
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  welcomeText: {
    marginTop: 120,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "left",
  },
  createNew: {
    color: "grey",
    fontSize: 16,
    marginVertical: 10,
    marginBottom: 70,
  },
  createNewLink: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 20,
  },
  userNameInput: {
    height: 80,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 12,
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#f5f5f5",
    backgroundColor: "#F5F5F5"
  },
  passwordInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  loginBtn: {
    height: 80,
    borderWidth: 0,
    padding: 10,
    marginTop: 100,
    marginVertical: 10,
    borderRadius: 12,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#B12341',
  },
  btnText: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  skip: {
    textAlign: "center",
    color: "grey",
    fontSize: 18,
  },
});
