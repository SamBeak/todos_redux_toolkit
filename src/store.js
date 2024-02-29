import {createAction, createReducer, legacy_createStore } from '@reduxjs/toolkit';

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const todoModifier = createReducer([], (builder) => {
    builder
    .addCase(addTodo, (state, action) => {
        state.push( {text: action.payload, id: Date.now() });
    })
    .addCase(deleteTodo, (state, action) => {
        return state.filter( todo => todo.id !== parseInt(action.id) );
    })
});

const storeTodo = legacy_createStore(todoModifier);

export default storeTodo;