import React from 'react';
import { ImageBackground,StyleSheet,SafeAreaView,View,Text,Image,Button} from 'react-native';



function WelcomeScreen  ({navigation}) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/welcome.jpeg")}
        >
        {/* <View style={styles.logo}> 
            <Image style={styles.logo} source={require("../assets/logo.png")}/> 
        </View>  */}

        <View style={styles.welcome}>
            <Text style={{fontSize:45, fontFamily: "Cochin",color: "#fff",
            }}>Welcome!</Text>
        </View>
            
        <View style={styles.loginButton}>
            <Button
            title="Log In"
            color="black"
            >
            </Button>
        </View>
        
        <View style={styles.signupButton}>
        <Button
            title="Sign Up"
            color="black"
            onPress={()=>navigation.navigate('signup')}>
            </Button>
        </View>
        </ImageBackground>
 
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain",
        alignItems:'center',
        

    },
    loginButton:{
        width: '50%',
        height:60,
        backgroundColor:"#85C1E9",
        bottom: -500,
    },
    signupButton:{
        width: '50%',
        height:60,
        backgroundColor:"#85929E",
        bottom: -550,
    },
    // logo:{
    //     position: "absolute",
    //     top: 70,
    //     alignItems:'center',
    //     left: 5,
    //     top: 1,
    // },
    welcome:{
        position:"absolute",
        top:350,
        
    },
})

export default WelcomeScreen;