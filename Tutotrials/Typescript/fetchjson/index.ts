import axios from "axios";

const url='http://jsonplaceholder.typicode.com/todos/3';

interface Todo {
  //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }  
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);

});

const logTodo = (id: number, title: string , completed: boolean) => {

  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it completed: ${completed}
`);
}