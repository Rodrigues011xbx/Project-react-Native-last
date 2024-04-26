import React, { useState } from 'react'
import { View, StyleSheet, Button, Text, Image, ImageBackground, Keyboard } from 'react-native'
import Titulo from '../Components/titulo'
import Input from '../Components/input'

const apiWeatherKey = "4382f837081a989b5af12503e9dcc513"

export default function MpApp() {
    const [cidadeValue, setCidadeValue] = useState('')
    const [climaDados, setClimaDados] = useState(null)

    const pesquisarCidade =  async () => {
        if (cidadeValue.trim() === '') {
            alert('Digite um local!')
            return;
        }
        const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeValue}&appid=${apiWeatherKey}&limit=5&lang=pt_br&units=metric`

        try {
            const response = await fetch(apiWeatherUrl)
            const data = await response.json()

            if (data.message === "city not found") {
                limparDados()
                alert("Cidade não encontrada")
            }
            else {
                setClimaDados(data)
            }
        } catch (error) {
            console.error('Error fetching weather data:', error)
        }
        Keyboard.dismiss()
    }

    const limparDados = () => {
        setCidadeValue('')
        setClimaDados(null)
    }

    return (
        <ImageBackground source={require('../../assets/app-img.jpg')} style={style.geral}>
            <View style={style.container}>
                <Titulo title="Previsão do Tempo" color="#ddd"/>
                <Input
                    value={cidadeValue}
                    placeholder="Cidade"
                    color="#fff"
                    funcao={(texto) => setCidadeValue(texto)}
                />
                <Button
                    title="Pesquisar"
                    onPress={pesquisarCidade}
                />
                <Button
                    title="Limpar"
                    onPress={limparDados}
                />
                {climaDados && (
                    <View style={style.climaResultado}>
                        <Text style={style.Text}>{climaDados?.name}</Text>
                        <Text style={style.Text}>{climaDados?.sys.country}</Text>
                        <Image source={{ uri: `https://openweathermap.org/img/wn/${climaDados.weather[0].icon}.png` }} style={style.climaIcon} />
                        <Text style={style.Text}>{climaDados?.main.temp}°C</Text>
                        <Text style={style.Text}>{climaDados?.weather[0].description}</Text>
                    </View>
                )}
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
        backgroundColor: '#313131'
    },
    Text: {
        color: '#fff'
    },
    climaResultado: {
        marginTop: 20,
        alignItems: 'center',
    },
    climaIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#0f0f0f',
        borderRadius: 10
    }
});