import React from 'react';
import { ImageBackground,StyleSheet,SafeAreaView,View,Text,Image,Button,TextInput,Alert} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import STYLES from '.';


function addscreen({navigation}) {
    const data =  {
            "id": 13,
            "name": "Butter, whipped",
            "calories": 717,
            "category_id": 1,
            "quantity": 0
        };

    const onSubmit = async() => {
        const reqdata = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Token 4401e006c3c0a6c2e54e56d832f7ad985a12c5df",
            },
            body: JSON.stringify({
                food_id: data.id,
                quantity: data.quantity
            }),
        };
        try {
            let fetchResponse = await fetch(
                'http://192.168.0.10:8000/foodrecords/', reqdata
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
        Alert.alert("Message", "Successfully Submitted", [
            {text: "Search Next", onPress: ()=>navigation.navigate("search")},
            {text:"Go to profile",onPress: ()=>navigation.navigate("profile")},
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: "row", marginTop: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 45, color: "#85C1E9", left: 10, bottom: 20}}>
                        KCAL
                    </Text>
                </View>
                <View style={{flexDirection: "row", marginTop: 40}}>
                    <Text style={{ fontSize: 45, color: "#85C1E9", left: 10, bottom: 20}}>
                        {data.name}
                    </Text>
                </View>
                <View style={{flexDirection: "row", marginTop: 40}}>
                    <Text style={{ fontSize: 45, color: "#85C1E9", left: 10, bottom: 20}}>
                        {data.calories}cals
                    </Text>
                </View>
               
                <View style={{marginTop: 20}}>
                    <View style = {STYLES.inputContainer}> 
                    <TextInput placeholder="Enter weight(g)" placeholderTextColor= "black" style={styles.input}
                               onChangeText={val => data.quantity = parseInt(val)}/>
                    </View>
                </View>
                
                <View style = {STYLES.registerbutton}> 
                    <TouchableOpacity onPress={onSubmit}>
                        <Text style={{color:"#fff",fontWeight:'bold',fontSize:18}}>add to list</Text>
                    </TouchableOpacity>
                </View>
                
                
            </ScrollView>
    
        
    );
}

export default addscreen;

const styles = StyleSheet.create({
    input: {
        color: "black",
        textShadowColor:"white",
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
    }
})



