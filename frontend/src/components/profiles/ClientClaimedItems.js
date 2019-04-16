import React, {Component} from 'react'
import axios from 'axios'


class ClientClaimedItems extends Component{
  constructor(){
    super()

  }

  componentDidMount(){

  }

getClaimedFoodItemsByClient = (name) => {
  axios.get(`/api/fooditems/client${name}`)
}





  render(){
    return(
      <div className="clientClaimedItemsPage">
      </div>
    )
  }
}

export default ClientClaimedItems
