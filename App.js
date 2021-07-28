import React, {useState} from 'react';
import {  StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView , Alert} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    
    if(task.length !== 0 ){
      taskItems.push(task)
      setTaskItems(taskItems)
      
      setTask("");

    }
    // console.log(taskItems)
   

  }
  const createTwoButtonAlert = (index) =>
  Alert.alert(
    "Alert Title",
    "want to delete",
    [
      {
        text: "cancel",
        // onPress: () => console.log("Cancel Pressed"),
        // a prompt will be added here 
        // so a user can edit todo's 
        // text : edit 
        
        style: "cancel"
      },
      { text: "delete", onPress: (index) => completeTask() }
    ]
  );



  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

     
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TODOS</Text>
        <View  style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a task....'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

        </View>
            <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() =>  createTwoButtonAlert() }>
                    <Task text={item} /> 
                  </TouchableOpacity>
                )
              })
            }

       
            </View>
      </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold' , 
    textAlign : 'center' , 
    marginBottom : 10 , 
    color : '#ff0000' , 
  },
  items: {
    marginTop: 15,
  },
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,

  },
});