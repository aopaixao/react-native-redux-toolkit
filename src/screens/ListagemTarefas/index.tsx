import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ItemLista from '../../components/ItemLista';
import removeTarefa from '../../redux/slice/tarefasSlice';

const ListagemTarefas = () => {
  const tarefas = useSelector((state) => state.tarefas);

  return(
    <FlatList
        style={styles.flatlist}
        data={tarefas}
        renderItem={({ item }) => (
            <ItemLista item={item} />
        )}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flex: 2,
    marginTop:10,
  },  
});

export default ListagemTarefas;