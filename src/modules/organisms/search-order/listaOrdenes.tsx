import {Card, CardContent, Typography} from "@mui/material";
import {Todos} from "@prisma/client";
import React from "preact/compat";

type TodosProps = {
  todos: Todos[];
};
const ListaOrdenes: React.FC<TodosProps> = ({todos}) => {
  return (
    <Card sx={{minWidth: 275}}>
      <CardContent>
        <Typography variant="h4" component="div">Lista de ordenes</Typography>
        <Typography>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default ListaOrdenes;