import React from "react"

class ClickCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)

    }

    handleClick1() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            }

        })
    }

    
    handleClick5() {
        this.setState((prevState) => {
            return {
                count: prevState.count+5
            }

        })
    }

    render() {
        return (
            <div id="container">
                <h1 className="count">{this.state.count}</h1>
                <button className="b1" onClick={this.handleClick1}>Change +1</button>
                <button className="b2" onClick={this.handleClick5}>Change +5</button>
            </div>
        )
    }

}

export default ClickCounter