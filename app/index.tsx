import { Image, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import FullScreen from "@/components/containers/FullScreen";
import FormInput from "@/components/form/FormInput";
import FormButton from "@/components/form/FormButton";

export default function index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "teste" && password === "123") {
      router.push("/garage"); 
    } else {
      setErrorMessage("Usuário ou senha incorretos."); 
    }
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
    if (text === "" && password === "") {
      setErrorMessage(""); 
    }
  };
  
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (text === "" && username === "") {
      setErrorMessage(""); 
    }
  };
  

  return (
    <FullScreen>
      <Image source={require("../assets/images/Logo.jpeg")} style={styles.logo} />
      <FormInput
        label="Login"
        value={username}
        onChangeText={handleUsernameChange}
        testID="Login"
      />
      <FormInput
        label="Senha"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
        testID="Senha"
      />
      <FormButton
        imageSource={require("../assets/images/Start.png")}
        onPress={handleLogin}
        title="START"
        testID="START"
      />
      {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : null}
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop:-40,
    marginBottom:25,
    width: "100%", 
    height: 150, 
    resizeMode: "contain",
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});
