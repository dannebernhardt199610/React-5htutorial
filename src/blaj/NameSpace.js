import React, {Component} from 'react'

class NameSpace extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        
    }

     render() {
    return (
        <div>
            <form>
                <input type="text" name="firstName" placeholder="First name" onChange={this.handleChange} />
                <br />
                <input type="text" name="lastName" placeholder="Last name" onChange={this.handleChange} />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>

        </div>
    )}
}

export default NameSpace

