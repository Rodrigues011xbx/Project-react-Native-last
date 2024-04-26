import React, { useState } from 'react'
import { View, StyleSheet, Button, ImageBackground } from 'react-native'
import Titulo from '../Components/titulo'
import Input from '../Components/input'



export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const submitLogin = () => {
        if (verificar()) {
            navigation.navigate('Aplicativo')
        }
    }

    const verificar = () => {
        if (email.trim() === '') {
            alert('O campo de email está vazio!')
            return false;
        }
        else if (senha.trim() === '') {
            alert('O campo de senha está vazio!')
            return false;
        }
        return true;
    }

    return (
        <ImageBackground source={require('../../assets/img-project.jpg')} style={style.geral}>
            <View style={style.container}>
                <Titulo title="Conta"/>
                <Input
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    type="email-address"
                    funcao={(texto) => setEmail(texto)}
                />
                <Input
                    password
                    value={senha}
                    placeholder="Senha"
                    funcao={(texto) => setSenha(texto)}
                />
                <View style={style.btnContainer}>
                    <Button
                        title="Entrar"
                        onPress={submitLogin}
                        style={style.btn}
                    />
                    <Button title="Cadastro" />
                </View>
            </View>
        </ImageBackground>
    );
}



const style = StyleSheet.create({
    geral: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch'
    },
    container: {
        padding: 15,
        width: '80%',
        borderRadius: 12,
        backgroundColor: '#fff'
    },
    btnContainer: {
        gap: 5,
        marginTop: 10,
        flexDirection: "row"
    }
});