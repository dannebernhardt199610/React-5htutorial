import React, {Component} from "react"



class UnreadMessages extends Component {
    constructor() {
        super()
        this.state = {
          unreadMessages: [
            "Call your disgusting bro",
            "New spam email from some sexy girl!"
          ]
        }
    }

        render() {
    
            return (
                <div>
                {this.state.unreadMessages.length > 0 ?
              <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
                  null
                  }  
              </div>
              
            )
       
        }
  
    }


export default UnreadMessages