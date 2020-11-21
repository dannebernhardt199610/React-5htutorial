import './App.css';
import React from "react"
import Header from "./components/Header"
import TodoItem from './components/TodoItem'
import Jokes from "./components/Jokes"

import jokesData from "./data/jokesData"
import todosData from "./data/todosData"

import ClickCounter from "./blaj/ClickCounter"
import Conditional from './blaj/Conditional';
import Login from "./blaj/Login"
import FetchApi from "./blaj/FetchApi"
import NameSpace from "./blaj/NameSpace"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
      isLoading: true,
      unreadMessages: [
        "Call your disgusting bro",
        "New spam email from some sexy girl!"

      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }
 
  

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }


  render() {

  const firstName = "Daniel"
  const lastName = "Bernhardt"


  const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} answer ={joke.answer} />)

  const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
 

  return (
    <div>
     
    <Header />

  <h1>hello {`${firstName} ${lastName}`}</h1>

    
  <div className="jokescomponents">{jokeComponents} </div>



  <div className="todo-list"> {todoItems} </div>

    <ClickCounter />

    <div>
      {this.state.isLoading ?
      <h1>Loading...</h1> :
      <Conditional />
    }
    </div>

    <NameSpace />

    <div>
      {this.state.unreadMessages.length > 0 ?
  <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
      null
      }  
  </div>

  <Login />

  <FetchApi />
    
    </div>
  );
}
}

export default App;


/*https://www.youtube.com/watch?v=DLX62G4lc44
 2:47 */