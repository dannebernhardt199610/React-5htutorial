import React from "react"



class ConditionalLoader extends React.Component {
    constructor() {
      super()
      this.state = {
        isLoading: true
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 2000)
    }
  

    render() {
      return (
      <div>
      

      {this.state.isLoading ?
      <h1>Loading...</h1> :
      <h1>Conditional Rendering</h1>
    }
    </div>

      )
    }

}

export default ConditionalLoader