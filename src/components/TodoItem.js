import { useState } from 'react';
import styled from 'styled-components';

const TodoItem = ({ text, id, isCompleted }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [isCompleteByCheckBox, setIsCompleteByCheckBox] = useState(false);

  const clickEdit = () => {
    setIsEdit(!isEdit);
  };

  const clickEditDoneButton = async () => {
    try {
      if (isCompleteByCheckBox) setIsCompleteByCheckBox(!isCompleteByCheckBox);
      const propsData = {
        id,
        userData: { todo: editedText, isCompleted: isCompleted },
      };
      await putTodos(propsData); // TODO: F. Todo axios 함수 호출
      setEditedText('');
    } catch (err) {
      console.error(err);
      alert('요청하신 데이터를 처리할 수 없습니다. 관리자에게 문의해주세요.');
    }
  };

  const clickRemoveButton = async () => {
    try {
      await deleteTodos(id); // TODO: F. Todo axios 함수 호출
    } catch (err) {
      console.error(err);
      alert('요청하신 데이터를 처리할 수 없습니다. 관리자에게 문의해주세요.');
    }
  };
  return isEdit ? (
    <TodoWrapper>
      <Checkbox
        autoFocus
        type="text"
        value={text}
        onChange={(e) => {
          setEditedText(e.target.value);
        }}
      />
      <button type="button" onClick={() => clickEditDoneButton(false)}>
        제출
      </button>
      <button type="button" onClick={clickEdit}>
        취소
      </button>
    </TodoWrapper>
  ) : (
    <TodoWrapper>
      <Checkbox
        type="checkbox"
        checked={isCompleteByCheckBox}
        onChange={() => setIsCompleteByCheckBox(!isCompleteByCheckBox)}
      />
      <span>{text}</span>
      <button type="button" onClick={clickEdit}>
        수정
      </button>
      <button type="button" onClick={() => clickRemoveButton(id)}>
        삭제
      </button>
    </TodoWrapper>
  );
};

export default TodoItem;

const Checkbox = styled.input``;

const TodoWrapper = styled.li`
  padding: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
