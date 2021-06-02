import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    tela:{
        flex:1,
        width:'100%',
        height:'100%',
        paddingTop:120,
        alignItems:'center',
        backgroundColor:'#9FD8DF'
    },
    cidade:{
        color:'#ffff',
        fontSize:60,
        marginRight:160,
    },
    temperatura:{
        color:'#ffff',
        fontSize:18,
        marginLeft:160,
    },
    Image:{
          width:280,
          height:240,
          marginTop:30
    },
    boxstatus:{
          alignItems:'center',    
    },
    graus:{
        color: '#ffff',
        fontSize:70,
    },
    clima:{
        color:'#ffff',
        fontSize:25,
    },
    button:{
        width:100,
        padding:10,
        backgroundColor:'#1597BB',
        height:45,
        alignItems:'center',
        borderRadius:30,
        marginTop:20,
    },
    titulobotao:{
        fontSize:18,
        color:'#ffff'
    }
})
export default style;