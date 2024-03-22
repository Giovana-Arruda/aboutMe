import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';
import { styles } from './Links.styles';


const Links = () => {
  const handleLinkedinPress = () => {
    const urlLinkedin = 'https://www.linkedin.com/in/giovana-bertipaglia-6285abb6/';
    Linking.openURL(urlLinkedin);
  };

  const handleGitHubPress = () => {
    const urlGitHub = 'https://github.com/Giovana-Arruda';
    Linking.openURL(urlGitHub);
  };

  const handleEmailPress = () => {
    const email = 'giovanab.arruda@gmail.com';


    // Construa o URL com o protocolo mailto:
    const url = `mailto:${email}`;

    // Abre o URL no cliente de e-mail padrão do dispositivo
    Linking.openURL(url);

  };

  return (
    <React.Fragment>
      <TouchableOpacity onPress={handleLinkedinPress} style={styles.button}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGitHubPress} style={styles.button}>
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEmailPress} style={styles.button}>
        <Text style={styles.buttonText}>Email</Text>
      </TouchableOpacity>
    </React.Fragment>


  );
};

export default Links;
