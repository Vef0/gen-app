import {Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Todos} from "@prisma/client";
import React from "preact/compat";
import InfoIcon from '@mui/icons-material/Info';

type TodosProps = {
  todos: Todos[];
};
const ListaOrdenes: React.FC<TodosProps> = ({todos}) => {
  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
        Lista de ordenes 📕
      </Typography>
      <List dense={true}>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemIcon>
              <InfoIcon/>
            </ListItemIcon>
            <ListItemText
              primary={todo.title}
              secondary={todo.isCompleted ? 'Completado' : 'Pendiente'}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  )
};

export default ListaOrdenes;