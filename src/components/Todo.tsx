import { todosCollection } from "../firebase";
import { ITodo } from "../Interfaces";
// styles
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Todo.scss";

interface Props {
  todo: ITodo;
}

const Todo = ({ todo }: Props) => {
  const updateTodo = (): void => {
    todosCollection.doc(todo.id).set({ ...todo, done: !todo.done });
  };

  return (
    <div className="Todo">
      <Switch
        edge="end"
        checked={todo.done}
        onChange={updateTodo}
        inputProps={{ "aria-label": "Complete" }}
      />
      <p>{todo.task}</p>
      <IconButton
        aria-label="delete"
        onClick={(e) => todosCollection.doc(todo.id).delete()}>
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Todo;
