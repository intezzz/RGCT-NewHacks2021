import React from 'react';
import { ImageBackground,StyleSheet,SafeAreaView,View,Text,Image,Button,TextInput} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import STYLES from '.';



function loginscreen({navigation}) {
    return (
        <ImageBackground 
        style={{resizeMode: "contain",flex:1}}
        source={require("../assets/signup.jpeg")}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: "row", marginTop: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 45, color: "#85C1E9", left: 10, bottom: 20}}>
                        KCAL
                    </Text>
                </View>
               
                <View style={{marginTop: 20}}>
                    <View style = {STYLES.inputContainer}> 
                    <TextInput placeholder="Enter Email" placeholderTextColor= "white" style={STYLES.input}/>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <View style = {STYLES.inputContainer}> 
                    <TextInput placeholder="Enter Password" placeholderTextColor= "white" style={STYLES.input} secureTextEntry/>
                    </View>
                </View>
                <View style = {STYLES.registerbutton}> 
                    <TouchableOpacity onPress={()=>navigation.navigate('search')}>
                        <Text style={{color:"#fff",fontWeight:'bold',fontSize:18}}>Log In</Text>
                    </TouchableOpacity>
                </View>
                
                
            </ScrollView>
        </ImageBackground>
        
    );
}

export default loginscreen;

