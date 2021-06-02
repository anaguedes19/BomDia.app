import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import style from './index'
import ensolarado from '../../assets/img/sol.png'
import chuvoso from '../../assets/img/chuva.png'
import nublado from '../../assets/img/nublado.png'


export function Status({ navigation, route }) {
    const cidade = route.params.cidade;
    const temperatura = converter(route.params.temperatura);
    const temperaturamaxima = converter(route.params.temperaturamaxima);
    const temperaturaminima = converter(route.params.temperaturaminima);
    function converter(grau) {
        const temperatura = parseInt(grau)
        return temperatura - 273
    }

    return (
        <SafeAreaView style={style.tela}>
            <View style={style.box}>
                <Text style={style.cidade}>{cidade}</Text>
                <Text style={style.temperatura}>MIN {temperaturaminima}° MAX {temperaturamaxima}°</Text>
            </View>
            <View style={style.boxstatus}>

                {temperatura >= 9 && temperatura <= 14 &&

                    <Image source={chuvoso} style={style.Image} />
                }
                {temperatura >= 15 && temperatura <= 18 &&

                    <Image source={nublado} style={style.Image} />
                }
                {temperatura >= 19 && temperatura <= 30 &&

                    <Image source={ensolarado} style={style.Image} />
                }
               


                <Text style={style.graus}>{temperatura}° C</Text>
                {temperatura >= 9 && temperatura <= 14 &&

                    <Text style={style.clima}>Tempo Frio</Text>
                }
                {temperatura >= 15 && temperatura <= 18 &&

                    <Text style={style.clima}>Tempo Nublado</Text>
                }
                {temperatura >= 19 && temperatura <= 30 &&

                    <Text style={style.clima}>Tempo Ensolarado</Text>
                }
               
            </View>
            <View>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={style.titulobotao}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
