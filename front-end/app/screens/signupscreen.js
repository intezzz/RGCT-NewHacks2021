import React from 'react';
import { ImageBackground,StyleSheet,SafeAreaView,View,Text,Image,Button,TextInput,Alert} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import STYLES from '.';



function signupscreen({navigation}) {

    const data =  {
        "email": 13,
        "username": "Butter, whipped",
        "password": 717,
    };

    const onClick = async() => {
        const reqdata = {
            method: "POST",
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
            }),
        };
        try {
            let fetchResponse = await fetch(
                'http://192.168.0.10:8000/register/', reqdata
            );
            const respJson = await fetchResponse.json();
            displaySuccessAlert();
            return respJson;
        } catch (e) {
            console.log(e);
            displayNoConnectionAlert();
            return [];
        }
    };

    // Alerts
    const displaySuccessAlert = () => {
        Alert.alert("Message", "Register Successfully", [
            {text: "Start your search", onPress: ()=>navigation.navigate("search")},

        ])
    };

    const displayNoConnectionAlert = () => {
        Alert.alert("Connection Error", "Failed to connect to the server", [
            {
                text: "Close",
                style: "cancel",
            },
        ]);
    };

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
                    <TextInput placeholder="Create Username" placeholderTextColor= "white" style={STYLES.input}
                               onChangeText={val => data.username = val}/>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <View style = {STYLES.inputContainer}> 
                    <TextInput placeholder="Email" placeholderTextColor= "white" style={STYLES.input}
                               onChangeText={val => data.email = val}/>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <View style = {STYLES.inputContainer}> 
                    <TextInput placeholder="Creat Password" placeholderTextColor= "white" style={STYLES.input} secureTextEntry
                               onChangeText={val => data.password = val}/>
                    </View>
                </View>
                <View style = {STYLES.registerbutton}> 
                    <TouchableOpacity onPress={onClick}>
                        <Text style={{color:"#fff",fontWeight:'bold',fontSize:18}}>Register</Text>
                    </TouchableOpacity>
                </View>
                
                
            </ScrollView>
        </ImageBackground>
        
    );
}

export default signupscreen;

const styles = StyleSheet.create({
    
})