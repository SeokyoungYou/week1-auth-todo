import { dispatchContext, todoContext } from '../context/todoContext';
import TodoItem from './TodoItem';
import { useContext, useEffect } from 'react';
import { getTodos } from '../utils/axios-api-fn';
const TodoList = () => {
  const getTodo = useContext(todoContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    const initTodo = () => {
      getTodos()
        .then((response) => {
          dispatch({ type: 'INIT', initTodos: response });
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    initTodo();
  }, [dispatch]);
  return (
    <>
      {getTodo ? (
        getTodo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              text={todo.todo}
              id={todo.id}
              isCompleted={todo.isCompleted}
            />
          );
        })
      ) : (
        <span>TodoList가 없습니다</span>
      )}
    </>
  );
};

export default TodoList;
