import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);

    const addTodoList = (todo) => {

        let list = todoList.slice();
        list.push(todo);
        // const list = todoList.push(todo);
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));

    }

    const removeTodoList = (index) => {
        
        let list = todoList.slice();
        list.splice(index, 1);
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    }

    const initData = async () => {
        try {
            const list = await AsyncStorage.getItem('todoList');
            if(list !== null) {
                setTodoList(JSON.parse(list));
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect( ()=> {
        initData();
    }, []);

    return (
        <TodoListContext.Provider
            value={{
                todoList,
                addTodoList,
                removeTodoList
            }}>
                {children}
            </TodoListContext.Provider>
    )
}

export { TodoListContextProvider, TodoListContext };