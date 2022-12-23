import TodoItem from './TodoItem';

const TodoList = () => {
  const getTodo = [
    { id: 123, isCompleted: false, todo: 'todotodo', userId: 111 },
    { id: 124, isCompleted: true, todo: 'todo', userId: 111 },
    { id: 125, isCompleted: false, todo: 'todoto', userId: 111 },
  ];

  return (
    <>
      {getTodo?.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            text={todo.todo}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </>
  );
};

export default TodoList;
