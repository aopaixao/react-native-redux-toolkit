import { configureStore } from "@reduxjs/toolkit";
import tarefasSlice from '../slice/tarefasSlice';

export const store = configureStore({
    reducer: {
        tarefas: tarefasSlice
    },
});