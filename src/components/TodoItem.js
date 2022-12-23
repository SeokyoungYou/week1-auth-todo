import { useState, useContext } from 'react';
import { deleteTodos, putTodos } from '../utils/axios-api-fn';
import { dispatchContext } from '../context/todoContext';

const TodoItem = ({ text, id, isCompleted }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState('');

  const clickEdit = () => {
    setIsEdit(!isEdit);
  };
  const dispatch = useContext(dispatchContext);

  const clickEditDoneButton = async () => {
    await putTodos({ id, isCompleted, todo: editedText ? editedText : text })
      .then((response) => {
        dispatch({ type: 'EDIT', todo: response });
        clickEdit();
      })
      .catch((error) => {
        alert('요청하신 데이터를 처리할 수 없습니다. 관리자에게 문의해주세요.');
      });
    setEditedText('');
  };

  const clickRemoveButton = async () => {
    await deleteTodos(id)
      .then(() => {
        dispatch({ type: 'DELETE', id });
      })
      .catch((error) => {
        alert('요청하신 데이터를 처리할 수 없습니다. 관리자에게 문의해주세요.');
      });
  };
  const clickCompleteCheckbox = async () => {
    await putTodos({ id, isCompleted: !isCompleted, todo: text })
      .then((response) => {
        dispatch({ type: 'EDIT', todo: response });
      })
      .catch((error) => {
        throw new Error(error);
      });
    setEditedText('');
  };
  return isEdit ? (
    <TodoWrapper>
      <Checkbox
        autoFocus
        type="text"
        defaultValue={text}
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
        checked={isCompleted}
        onChange={clickCompleteCheckbox}
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
