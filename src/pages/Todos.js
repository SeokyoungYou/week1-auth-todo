import styled from 'styled-components';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoContext from '../context/todoContext';
import { theme } from '../theme';

export default function Todos() {
  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>Todo list</Title>
      <TodoWrapper>
        <TodoContext>
          <TodoForm />
          <TodoList />
        </TodoContext>
      </TodoWrapper>
    </Wrapper>
  );
}

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
