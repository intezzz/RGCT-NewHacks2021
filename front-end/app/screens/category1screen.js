// import React from 'react';
// import { ImageBackground,StyleSheet,SafeAreaView,View,Text,Image,Button} from 'react-native';

// function category1screen(props) {
//     return (
//         <View style={styles.welcome}>
//         <Text style={{fontSize:45, fontFamily: "Cochin",color: "#fff",
//         }}>Welcome!</Text>
//     </View>
//     );
// }

// export default category1screen;

// const styles = StyleSheet.create({
    
// })

import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default category1screen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  const reqdata = {
      method: 'GET',
      headers: {
          Authorization: "Token 4401e006c3c0a6c2e54e56d832f7ad985a12c5df",
      },
  };

  useEffect(() => {
    fetch('http://192.168.0.10:8000/foodcategory/1', reqdata)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={()=>navigation.navigate("add")}>
      <FlatList
          data={data} keyExtractor={item => item.id}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}
          </Text>}
      />
          </TouchableOpacity>
      </View>
  );
}
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



