import React, {Component} from "react"
import TodoItem from "./TodoItem"
import todosData from "../../data/todosData";



class Todos extends Component {
    constructor(){
    super()
    this.state = {
        todos: todosData
    }
}

render() {
  return (
      <div
      className="todo-list"> {this.state.todos.map(item => <TodoItem key={item.id} item={item} />)}
      </div>
    )
  }
}


export default Todos
