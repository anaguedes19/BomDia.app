import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    tela:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#9FD8DF'
    },
    titulo:{
        color:'#FA7F21',
        marginTop:280,
        marginLeft:70,
        fontSize:80,
    },
    input:{
         backgroundColor:'#ffff',
         padding:10,
         width:300,
         borderRadius:30,
         paddingLeft:20,
         marginTop:30,
         marginLeft:50
    },  
    button:{
        width:100,
        padding:10,
        backgroundColor:'#1597BB',
        height:45,
        alignItems:'center',
        borderRadius:30,
        marginTop:20,
        marginLeft:150
    },
    titulobotao:{
        fontSize:18,
        color:'#ffff'
    },
    fundo:{
        width:'100%',
        height:'100%'
    }
    
})
export default style;