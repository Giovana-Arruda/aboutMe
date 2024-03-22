import { Image } from 'react-native';
import { styles } from './PhotoProfile.styles';
import fotoPerfil from './../../../assets/foto.jpg';

export function FotoPerfil(){
    return(
        <>
        
        <Image source={fotoPerfil} style={styles.foto}  />
        
        </>
    )
} 