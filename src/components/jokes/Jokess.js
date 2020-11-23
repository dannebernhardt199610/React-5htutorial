import React, {Component} from "react"
import jokesData from "../../data/jokesData";
import Jokes from "./JokesRender"


class Jokess extends Component {
        render() {
        const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} answer ={joke.answer} />) 
            return (
                <div className="jokescomponents">{jokeComponents} </div>
            )
       
        }
    }


export default Jokess