import React from "react";

export const InCompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* ループで処理 
        何番目かを知りたいので、indexを活用するs
    */}
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
