import { useState } from 'react';
import TodoList from '../components/TodoList';
import styled from 'styled-components';
import { theme } from '../theme';
import TodoForm from '../components/TodoForm';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>Todo list</Title>
      <TodoWrapper>
        <TodoForm />
        <TodoList />
      </TodoWrapper>
    </Wrapper>
  );
};
export default Todos;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TodoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 30px;
`;
