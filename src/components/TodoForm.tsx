import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { todosCollection } from "../firebase";

const TodoForm = () => {
  const [value, setValue] = useState<string>("");

  const createTodo = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    const item = {
      task: value,
      done: false,
    };
    todosCollection.add(item);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={createTodo}>
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Agregar!"
          variant="outlined"
        />
      </form>
    </div>
  );
};

export default TodoForm;
