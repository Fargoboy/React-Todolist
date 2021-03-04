import React, { useState } from "react";
import {  View, Text, Button,StyleSheet, ScrollView, TextInput} from "react-native";
import Todo from "./addgoals";
function addgoal() {
    const [tittle, setTittle] = useState()
    const [text,setText] = useState()
    const [list, setList] = useState([]);
    //Add Item Method
    const addItem = () => {
        const updatedList = list;
        updatedList.push(text)
        setList(updatedList);
        setText('')
    }



    const deleteItem = (index) => {
        const updatedList = list.filter((goal) => goal !== index);
        setList(updatedList)
    }
    return (
      <>
        <View style={{ width: "50%", marginBottom: 60 }}>
          <Text style={[styles.align, styles.font]}>{tittle}</Text>
          <ScrollView>
           {list.map((x,index) => <Todo key={index}  item={x} index={index} delete={deleteItem}/>)}
          </ScrollView>
          <View>
            <TextInput
              style={styles.textbox}
              value={text} placeholder=" Add New Goal"
              onChangeText={(text) => setText(text)}
            />
              <Button variant="primary" size="lg" active title="Add a New Item" onPress={addItem} />
          </View>
        </View>
      </>
    );
}
const styles = StyleSheet.create({
    align:{
        alignSelf:"center"
    },font:{
        fontSize:36,
        fontWeight:'bold'
    },
  textbox:{
backgroundColor: 'white',
color:'#000',
textAlign: "center",
fontSize: '36',
borderRadius:5,
borderWidth:1,
marginBottom:8,
padding:8
    }
})
export default addgoal;
