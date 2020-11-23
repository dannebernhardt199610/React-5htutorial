import React, {Component} from 'react'

class FetchApi extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
       

        
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data,
                    firstName: "",
                    lastName: ""
                })
            })
    }

    render () {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
        <div>
            <h1>{text}</h1>

        </div>

        
    )
  }
}

export default FetchApi