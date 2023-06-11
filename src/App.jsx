import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // 追加ボタン押下時の処理
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン押下時の処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 未完了のTODOからの削除
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);
    setIncompleteTodos(newInCompleteTodos);

    // 完了のTODOへの追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までです。TODOを消化してね
        </p>
      )}

      <InCompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
