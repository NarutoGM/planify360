import { Pressable, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
export default function BtnLoginGoogle() {
    const [request,response,prompAsync] =Google.useAuthRequest({
        androidClientId: '24166991758-62ndqsr4beqcrh8726kij3rme98gtpqp.apps.googleusercontent.com',
    });
    
const enviarTokenalServidor = async (token: string) => {
console.log(token);
};

    useEffect(() => {
        if(response?.type === 'success'){
           enviarTokenalServidor(response.authentication?.idToken || '');
        } else {
            console.log("Error al iniciar sesion", response); 
        }
    },[response]);

    return (
    <Pressable style={styles.btn}
    onPress={() =>  prompAsync().catch((e) => {
        console.log("Error al iniciar sesion",e);
    }) }>
      <Text style={{ textAlign: 'center' }}>Login con Google</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
  },
});