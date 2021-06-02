import React, { useState } from 'react'
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import style from './Index'
import axios from 'axios'
import fundo from '../../assets/img/background.jpg'
export function Home({ navigation }) {

    const [Input, setInput] = useState('')
    const [botao, setBotao] = useState('Iniciar')
    const Api = () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${Input}&appid=d41111918f40e8ab42bd165f9387c4ab`

        axios.get(url).then(
            (res) => {
                const consulta = {
                    cidade:res.data.name,
                    temperatura:res.data.main.temp,
                    temperaturamaxima:res.data.main.temp_max,
                    temperaturaminima:res.data.main.temp_min,
                }
                navigation.navigate("status", consulta)
            }
        )
    }
    
    return (
        <SafeAreaView style={style.tela}>
            <ImageBackground source={fundo} style={style.fundo}>
            
            <View>
                <Text style={style.titulo}>BomDia</Text>
            </View>

            <View>
                {botao == "Iniciar" &&

                    <TouchableOpacity style={style.button} onPress={() => setBotao('Consultar')}>
                        <Text style={style.titulobotao}>{botao}</Text>
                    </TouchableOpacity>
                }

                {botao == "Consultar" &&
                    <>
                        <View>
                            <TextInput style={style.input} value={Input} onChangeText={setInput} placeholder='Busque aqui' />
                        </View>
                        <TouchableOpacity style={style.button} onPress={() =>Api()}>
                            <Text style={style.titulobotao}>{botao}</Text>
                        </TouchableOpacity>
                    </>
                }

            </View>

            </ImageBackground>
        </SafeAreaView>
    );
}
