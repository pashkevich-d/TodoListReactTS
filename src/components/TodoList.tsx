import React from "react";
import { ITodo } from "../interfaces";

type TodoList = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoList> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <p className="center">Пока задач нет</p>;
  }

  const removeHandler = (event: React.MouseEvent, id:number) => {
    event.preventDefault();

    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li key={todo.id} className={classes.join(" ")}>
            <label>
              <input
                onChange={onToggle.bind(null, todo.id)}
                type="checkbox"
                checked={todo.completed}
              />
              <span>{todo.title}</span>
              <i
                onClick={event => removeHandler(event, todo.id)}
                className="material-icons red-text"
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
