import './App.css';
import React from "react"
import Header from "./components/Header"
import Travel from "./components/TravelForm"
import Jokess from "./components/jokes/Jokess"
import Todos from "./components/todos/Todos"
import ConditionalLoader from './components/conditionalLoad/ConditionalLoader'
import UnreadMessages from "./components/UndreadMessages"

import ClickCounter from "./blaj/ClickCounter"

import Login from "./blaj/Login"
import FetchApi from "./blaj/FetchApi"
import NameSpace from "./blaj/NameSpace"
import HelloName from './blaj/HelloName';




class App extends React.Component {


  render() {

  return (
  <div>

  <Header />
  <HelloName />
  <Jokess />
  <Todos />
  <ClickCounter />
  <ConditionalLoader />
  <NameSpace />
  <UnreadMessages />
  <Login />
  <FetchApi />

  <br/><br/><br/>
  
 <Travel />

  </div>
  );
 }
}

export default App;


/*https://www.youtube.com/watch?v=DLX62G4lc44
 4:27:38 */