import Todo from "./Todo";

export default function TodoList({ todoData }) {
  return (
    <div className="padding-top-list">
      {todoData.map((todo) => {
        return (
          <>
            <Todo todo={todo} />
          </>
        );
      })}
    </div>
  );
}