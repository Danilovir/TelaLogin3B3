// src/LoginScreen.js 

 

import React, { useState } from 'react'; 

import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; 

 

const Login = () => { 

  const [email, setEmail] = useState(''); 

  const [password, setPassword] = useState(''); 

 

  const AlterarLogin = () => { 

    // Aqui você pode adicionar a lógica de autenticação, por enquanto, apenas um log simples. 

    console.log(`Login com Email: ${email} e Senha: ${password}`); 

  }; 

 

  return ( 

    <View style={styles.container}> 

      <Text style={styles.heading}> Tela de Login </Text> 

      <TextInput 

        style={styles.input} 

        placeholder="Email" 

        value={email} 

        onChangeText={(text) => setEmail(text)} 

      /> 

      <TextInput 

        style={styles.input} 

        placeholder="Senha" 

        secureTextEntry={true} 

        value={password} 

        onChangeText={(text) => setPassword(text)} 

      /> 

      <Button title="Login" onPress={AlterarLogin} /> 

    </View> 

  ); 

}; 

 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    justifyContent: 'center', 

    alignItems: 'center', 

  }, 

  heading: { 

    fontSize: 20, 

    fontWeight: 'bold', 

    marginBottom: 20, 

  }, 

  input: { 

    width: '80%', 

    padding: 20, 

    marginBottom: 20, 

    borderWidth: 1, 

    borderColor: 'gray', 

  }, 

}); 

 

export default Login; 