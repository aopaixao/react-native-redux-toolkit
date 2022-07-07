import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {removeTarefa} from '../../redux/slice/tarefasSlice';

const ItemLista = ({item}) => {
  const tarefas = useSelector((state) => state.tarefas);
  const dispatch = useDispatch();
  
  const remTarefa = (id:number) =>{
    dispatch(removeTarefa(id));
  }

  return (
    <View style={styles.items_flatlist_view_container}>
      <View style={styles.flatlist_view_text}>
        <Text style={styles.txt_item}>{item.descricao}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn_remove}
        onPress={() => remTarefa(item.id)}>
        <Text style={styles.txt_btn_remove}> - </Text>
      </TouchableOpacity>
    </View>
  );
}

let width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  items_flatlist_view_container: {
    flex: 1,
    flexDirection: 'row',
    marginTop:10,
    padding: 5,
  }, 
  flatlist_view_text: {
    flex: 1,
    backgroundColor:'#e76f51',
    width: width * 1,
    height: 40,
    padding:6,
  },
  txt_item: {
    color: '#000',
    fontWeight:'bold',
  },
  btn_remove: {
    backgroundColor: '#e63946',
    borderRadius: 6,
    alignItems: 'center',
    height:40,
    padding:6,
    marginLeft:4,
    width: width * 0.1,
  },
  txt_btn_remove:{
    color:'#fff',
    fontWeight:'bold',
  },

});

export default ItemLista;