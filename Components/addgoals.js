import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";



function addgoal(props) {
    return (
      <>
        <View style={[styles.item,{margin:8,padding:8}]}>
          <Text>{props.item}</Text>
          <Button 
          title={'Remove'} 
          color={'red' }
       
       
          onPress={() => props.delete(props.item)}
          >
              
          </Button>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
    item:{

        flexDirection:'row',
        textAlign:'center',
        backgroundColor:'white',
        fontSize:'36',
        justifyContent:'space-between',
        borderColor:'green',
        borderWidth:3,
        borderRadius:15,
       
       
       
    }
})

export default addgoal;
