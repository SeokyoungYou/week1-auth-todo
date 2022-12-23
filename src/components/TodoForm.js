import styled from 'styled-components';
import { useState, useRef, useCallback } from 'react';
import { postTodos } from '../utils/axios-api-fn';
import { dispatchContext } from '../context/todoContext';

function TodoForm() {
  const [newTodo, setNewTodo] = useState();
  const inputRef = useRef();
  const dispatch = useContext(dispatchContext);
  const changeHandler = (evt) => {
    const {
      target: { value },
    } = evt;
    setNewTodo(value);
  };
  const sumbitHandler = async (evt) => {
    evt.preventDefault();
    if (newTodo) {
      await postTodos({ todo: newTodo })
        .then((response) => {
          dispatch({ type: 'ADD', todo: response });
        })
        .catch((err) => {
          throw new Error(err);
        });
      inputRef.current.value = '';
      inputRef.current.focus();
      setNewTodo('');
    }
  };

  return (
    <Form onSubmit={sumbitHandler}>
      <TodoInput
        ref={inputRef}
        placeholder="Add task"
        onChange={changeHandler}
      />
      <AddBtn>add</AddBtn>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;
const TodoInput = styled.input`
  width: 270px;
  height: 30px;
  border: none;
  padding: 0 10px;
  margin-right: 10px;
`;
const AddBtn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  background-color: ${(props) => props.theme.btnColor};
  color: white;
  cursor: pointer;
`;

export default TodoForm;
