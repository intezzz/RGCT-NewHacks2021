import {StyleSheet} from 'react-native'

const STYLES = StyleSheet.create({
    inputContainer: {flexDirection: 'row',marginTop:30},
    input:{
        textShadowColor:"white",
        color: "white",
        paddingLeft:30,
        borderBottomWidth: 0.3,
        borderLeftWidth:10,
        borderRightWidth:10,
        borderLeftColor: "#85C1E9",
        borderRightColor:"#85C1E9",
        flex:1,
        fontSize:18,
        left: 10,
        bottom: -20,
    },
    registerbutton: {
        backgroundColor: "#85C1E9",
        height: 60,
        marginTop:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 5,
       
     
    }
});
    
export default STYLES;