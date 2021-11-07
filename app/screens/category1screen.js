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
import { FlatList, Text, View } from 'react-native';

export default category1screen = () => {
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

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.name}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Foods:</Text>
          <FlatList
            data={data.name}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.name}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
};