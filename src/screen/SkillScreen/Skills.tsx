import React from 'react';
import { View, Text} from 'react-native';

import { styles } from './Skills.styles';
import { StatusBar } from 'expo-status-bar';
import { FotoPerfil } from '../../components/PhotoProfile/PhotoProfile';

export function Skills() {
  return (
    <>
    <View style={styles.appContainer}>
      <FotoPerfil />
      <Text style={styles.textoTitulo}>
        Minhas Habilidades</Text>

    <Text style={styles.textoHab}>CSS: ⭐⭐⭐</Text> 
    <Text style={styles.textoHab}>HTML: ⭐⭐⭐</Text>   
    <Text style={styles.textoHab}>TYPESCRIPT: ⭐⭐</Text>   
    <Text style={styles.textoHab}>JAVASCRIPT: ⭐⭐</Text>
    <Text style={styles.textoHab}>JAVA: ⭐⭐</Text>   

 

    </View><StatusBar style="dark" /></>

  
  );
}