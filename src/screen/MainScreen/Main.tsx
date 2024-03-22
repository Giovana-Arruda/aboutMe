import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './Main.styles';
import { FotoPerfil } from '../../components/PhotoProfile/PhotoProfile';
import { StatusBar } from 'expo-status-bar';
import Links from '../../components/Links/Links';


export function Main({navigation}: any) {


  function navToMySkills(){
    navigation.navigate('My Skills')
  }

  return (
    <>
    <View style={styles.appContainer}>
      <FotoPerfil />
      <Text style={styles.textoNome}>
        Giovana Bertipaglia</Text>
      <Links />   
      <Pressable
        onPress={navToMySkills}>
        <Text style={styles.textoPress}>Veja as minhas habilidades</Text>
      </Pressable>

    </View><StatusBar style="dark" /></>

  );
}
