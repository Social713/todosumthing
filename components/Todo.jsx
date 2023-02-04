export default function Todo({ todo }) {
    return (
      <div className={`${todo.complete ? "strike" : ""} todo`} >
        {todo.task}
        <hr />
      </div>
    );
  }