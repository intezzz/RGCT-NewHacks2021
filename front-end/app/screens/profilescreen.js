import React, {useEffect, useState} from 'react';
import { ImageBackground,StyleSheet,SafeAreaView,View,Text,Image,Button,TextInput} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import STYLES from '.';



function profilescreen({navigation}) {

    const [data, setData] = useState([]);
    const reqdata = {
        method: 'GET',
        headers: {
            Authorization: "Token 4401e006c3c0a6c2e54e56d832f7ad985a12c5df",
        },
    };

    useEffect(() => {
        fetch('http://192.168.0.10:8000/foodrecords/20211107', reqdata)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);


    return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: "row", marginTop: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 45, color: "#85C1E9", left: 10, bottom: 20}}>
                        Hi, RGCT!
                    </Text>
                </View>
                <View style={{flexDirection: "row", marginTop: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, color: "#85C1E9", alignItems: 'center'}}>
                        Today's list
                    </Text>
                </View>
                <View style={{flexDirection: "row", marginTop: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 45, color: "#85C1E9", left: 10, bottom: 20}}>
                        {data["daily_report"].calories}
                    </Text>
                </View>

                {/* <View style = {STYLES.registerbutton}> 
                    <TouchableOpacity>
                        <Text style={{color:"#fff",fontWeight:'bold',fontSize:18}}>View History</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.loginButton}>
                    <Button
                    title="View History"
                    color="black"
                    onPress={()=>navigation.navigate('history')}>
                    </Button>
                </View>
                <View style={styles.loginButton}>
                    <Button
                    title="Back to add"
                    color="black"
                    onPress={()=>navigation.navigate("search")}>
                    </Button>
                    </View>
                
                
            </ScrollView>
        
    );
}

export default profilescreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    item: {
        marginTop:20,
        padding:30,
        backgroundColor: '#85C1E9',
        fontSize:24
    }
});