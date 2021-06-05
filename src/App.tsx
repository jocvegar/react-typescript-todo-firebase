import React from "react";
// components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// styles
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container className="container" maxWidth="sm">
        <Card elevation={10}>
          <CardContent>
            <h3 style={{ textAlign: "center", color: "cadetblue" }}>
              OTRO TODO!
            </h3>
            <TodoForm />
            <TodoList />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
