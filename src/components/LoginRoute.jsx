import { Navigate } from "react-router-dom"

const LoginRoute = ({ isLoggedin , children}) => {
  if(isLoggedin){
    return <Navigate to={"/watch"} />;
  }
  
  return children
}

export default LoginRoute