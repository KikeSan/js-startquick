import pintar from './App'
import "./styles/index.scss";

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json =>pintar(json))
  