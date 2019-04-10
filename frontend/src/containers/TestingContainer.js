import Testing from '../components/testing.js'
import {connect } from 'react-redux'
import { fetchAllUsers } from '../actions/usersActions.js'


const mapStateToProps = (state) => {
return{
  users: state.users
}
}


const mapDispatchToProps = (dispatch) => {
  return{
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Testing)
