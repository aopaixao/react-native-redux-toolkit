import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListagemTarefas from '../ListagemTarefas';
import AdicionarTarefa from '../../components/AdicionarTarefa';

const Home = () => {
    return(
      <View style={styles.container}>
        <AdicionarTarefa />
        <ListagemTarefas />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
}); 

export default Home;