import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { todosCollection } from "../firebase";
import { ITodo } from "../Interfaces";

// styles
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const TodoList = () => {
  const [todos, setTodos] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    todosCollection.onSnapshot((querySnapshot) => {
      let items: ITodo[] = [];
      querySnapshot.forEach((doc) => {
        items.push(
          Object.assign({
            id: doc.id,
            task: doc.data().task,
            done: doc.data().done,
          })
        );
      });
      setTodos(items);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom align="center">
            loading...
          </Typography>
        </Box>
      )}
      {todos.map((todo: ITodo, idx: number) => {
        return (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} />
            {idx < todos.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TodoList;
