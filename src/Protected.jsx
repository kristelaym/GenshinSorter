
import { Navigate } from "react-router-dom";
import { UserAuth } from './AuthContext';

const Protected = ({children}) => {
  const {user} = UserAuth()
  if (!user) {
    return <Navigate to="/about" />;
  }
  return children;

  
}
export default Protected