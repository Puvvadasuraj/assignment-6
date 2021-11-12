import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const present = Cookies.get('jwt_token')
  if (!present) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
