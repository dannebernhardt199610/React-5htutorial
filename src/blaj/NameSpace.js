import React, {Component} from 'react'

class NameSpace extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
            [name]: value
        })
        
    }

     render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" placeholder="First name" onChange={this.handleChange} />
            <br />
             <input type="text" name="lastName" placeholder="Last name" onChange={this.handleChange} />
               
            
<br />

<textarea
placeholder="Write here"
onChange={this.handleChange} 
/>
<br />
<label>
    <input 
    type="checkbox" 
    name="isFriendly"
    checked={this.state.isFriendly}
    onChange={this.handleChange}
    />
    isfriendly?
    </label>
    <br />
    <label>
    <input 
    type="radio" 
    name="gender"
    value="male"
    checked={this.state.gender === "male"}
    onChange={this.handleChange}
    />
    male
    </label>
    <br />
    <label>
    <input 
    type="radio" 
    name="gender"
    value="female"
    checked={this.state.gender === "female"}
    onChange={this.handleChange}
    />
    female
    </label>
    <br />

    <label>Favorite color:</label>
    <select 
    value={this.state.favColor}
    onChange={this.handleChange}
    name="favColor"
    >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
    </select>
    <h1>{this.state.firstName} {this.state.lastName}</h1>
    <h1>Your favorite color is {this.state.favColor}</h1>
    <h1>You are a {this.state.gender}</h1>

    
    
    </form>
        </div>
        
    )}
}

export default NameSpace

