import ClientProfile from '../components/profiles/ClientProfile'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  debugger
  return{
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, null)(ClientProfile)
