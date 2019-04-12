import ClientProfile from '../components/profiles/ClientProfile'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return{
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, null)(ClientProfile)
