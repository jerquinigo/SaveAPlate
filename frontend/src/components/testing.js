import React, {Component} from "react"



class Testing extends Component{


componentDidMount(){
this.props.fetchAllUsers()
}


  render(){
    console.log(this.props, "what we receive")
    return(
      <div>
      test
      </div>
    )
  }
}


export default Testing
