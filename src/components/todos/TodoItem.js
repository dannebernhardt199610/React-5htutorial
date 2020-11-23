import React, {Component} from "react"


class TodoItem extends Component {
  constructor(props){
    super();
    this.state = {
        id: props.item.id,
        text: props.item.text,
        completed: props.item.completed,
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked(){
      this.setState({
        completed: !this.state.completed
      })
  }

  render(){
    return(
      <div className="todo-item">
      <input type="checkbox" checked={this.state.completed} onChange={this.clicked}/>
      <p style={this.state.completed?({
          fontStyle: "italic",
          color: "#cdcdcd",
          textDecoration: "line-through"
        }):({})}>{this.state.text}</p>
      </div>
    )
  }
}

export default TodoItem;
