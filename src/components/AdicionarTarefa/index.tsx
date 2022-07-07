import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { addTarefa } from "../../redux/slice/tarefasSlice";

const AdicionarTarefa = () => {
  const [descricao, setDescricao] = useState('');
  const dispatch = useDispatch();

  const handleAddTarefa = () => {
    dispatch(addTarefa(descricao));
    setDescricao('');
  }

  const handleKeypress = (e) => {
    if (e.nativeEvent.key === 'Enter' || e.nativeEvent.key === 'NumpadEnter') {  
      handleAddTarefa();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Tarefa" 
        value={descricao} 
        onChangeText={setDescricao} 
        style={styles.txt_input} 
        onKeyPress={(e) => handleKeypress(e)} 
      />
      <TouchableOpacity style={styles.btn_add} onPress={handleAddTarefa} >
        <Text style={styles.txt_btn_add}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        maxHeight:140,
        backgroundColor:'#e9ce6a',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    txt_input:{
        backgroundColor:'ghostwhite',
        padding:8,
        height:40,
        borderBottomColor:'#666',
        width:'70%',
        borderRadius: 6,
    },
    btn_add:{
      backgroundColor: '#264653',
      borderRadius: 6,
      alignItems: 'center',
      height:40,
      padding:6,
      marginLeft:4,
      width:'10%',
    },
    txt_btn_add:{
      color:'#fff',
      fontWeight:'bold',
    }
});

export default AdicionarTarefa;