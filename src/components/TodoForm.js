import styled from 'styled-components';
import { useState, useRef, useCallback } from 'react';

function TodoForm() {
  const [newTodo, setNewTodo] = useState();
  const inputRef = useRef();
  const changeHandler = (evt) => {
    const {
      target: { value },
    } = evt;
    setNewTodo(value);
  };
  const sumbitHandler = useCallback(
    async (evt) => {
      evt.preventDefault();
      if (newTodo) {
        // await postTodo(newTodo); //TODO: axios-api-fn 추가
        inputRef.current.value = '';
        inputRef.current.focus();
        setNewTodo('');
      }
    },
    [inputRef, newTodo],
  );

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
`;

export default TodoForm;
