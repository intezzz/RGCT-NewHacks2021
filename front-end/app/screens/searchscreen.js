import"react-native-gesture-handler";
import React,{useEffect,useState} from 'react';
// import { AntDesign } from '@expo/vector-icons';
import{StyleSheet,Text,View,Flatlist, ScrollView,TouchableOpacity} from 'react-native';

export default function searchscreen({navigation}){

    const categories = [
        {
            "name": "Dairy and Egg Products",
            "id": 1
        },
        {
            "name": "Spices and Herbs",
            "id": 2
        },
        {
            "name": "Babyfoods",
            "id": 3
        },
        {
            "name": "Fats and Oils",
            "id": 4
        },
        {
            "name": "Poultry Products",
            "id": 5
        },
        {
            "name": "Soups, Sauces and Gravies",
            "id": 6
        },
        {
            "name": "Sausages and Luncheon meats",
            "id": 7
        },
        {
            "name": "Breakfast cereals",
            "id": 8
        },
        {
            "name": "Fruits and fruit juices",
            "id": 9
        },
        {
            "name": "Pork Products",
            "id": 10
        },
        {
            "name": "Vegetables and Vegetable Products",
            "id": 11
        },
        {
            "name": "Nuts and Seeds",
            "id": 12
        },
        {
            "name": "Beef Products",
            "id": 13
        },
        {
            "name": "Beverages",
            "id": 14
        },
        {
            "name": "Finfish and Shellfish Products",
            "id": 15
        },
        {
            "name": "Legumes and Legume Products",
            "id": 16
        },
        {
            "name": "Lamb, Veal and Game",
            "id": 17
        },
        {
            "name": "Baked Products",
            "id": 18
        },
        {
            "name": "Sweets",
            "id": 19
        },
        {
            "name": "Cereals, Grains and Pasta",
            "id": 20
        },
        {
            "name": "Fast Foods",
            "id": 21
        },
        {
            "name": "Mixed Dishes",
            "id": 22
        },
        {
            "name": "Snacks",
            "id": 25
        }
    ]
      
      return (
        <View style={styles.container}>
            <ScrollView>
         {categories.map((cat) => (
           <View key={cat.key}>
                <TouchableOpacity onPress={()=>navigation.navigate(cat.name)}>
            <Text style={styles.item}>{cat.name}</Text>
            </TouchableOpacity>
           </View>
         ))}
         </ScrollView>
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
