import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../redux/todoSlicer";

export default function Todo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]); // Added dependency array to avoid infinite loop

  console.log(data);

  return (
    <div>
      {data.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        (data.data || []).map((todo) => {
          return (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
            </div>
          );
        })
      )}
    </div>
  );
}
