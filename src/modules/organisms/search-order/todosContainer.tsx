import React, {useEffect, useState} from 'react';
import ListaOrdenes from "./listaOrdenes";

const fetchTodos = async () => {
  const response = await fetch('../../api/todos');
  return response.json();
}

const TodosContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((todos) => {
      setTodos(todos);
    });
  }, [])
  return (
    <div>
      <ListaOrdenes todos={todos}/>
    </div>
  );
};

export default TodosContainer;