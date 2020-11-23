import React from 'react'


 function Jokes(props) {
    
    return (
        <div>
            <h2 style={{display: !props.question && "none"}}>Question: {props.question}</h2>
            <h3 color={{color: !props.question && "#888888"}}>Answer: {props.answer}</h3>
            <hr></hr>
            
            
        </div>
    )
}
export default Jokes