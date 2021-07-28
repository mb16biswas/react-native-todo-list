import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      
        
        <Text style = {styles.texts} >{props.text}</Text>
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ff0000',
    padding: 25,
    borderRadius: 50,

    marginBottom: 20,

  },

  texts : {
    fontWeight: 'bold' , 
    color: 'white' , 
  } , 
  
 
  
});

export default Task;