import { createSlice } from "@reduxjs/toolkit"

const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState: [],
    reducers: {
        addTarefa(state, action){
          let id = Math.random(); 
          state.push({ id: id, descricao: action.payload, completed: false })
          console.log('state: ' + JSON.stringify(state)) ;          
        },
        removeTarefa(state, action){
          const tarefa = state.find(tarefa => tarefa.id === action.payload);
          const indiceTarefa = state.indexOf(tarefa);
          if(tarefa){
            state.splice(indiceTarefa, 1);
          } 
        },
        toggleTarefa(state, action){
            const tarefa = state.find(tarefa => tarefa.id === action.payload);
            if(tarefa){
                tarefa.completed = !tarefa.completed;
            }
        }
    }
});

export const {addTarefa, removeTarefa, toggleTarefa} = tarefasSlice.actions;

export default tarefasSlice.reducer;