import React from 'react';
import Styled from 'styled-components/native';

import { TodoListContextProvider } from '~/context/TodoListContext';

import Todo from '~/screens/todo';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  )
}

export default App;