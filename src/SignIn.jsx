import GoogleButton from 'react-google-button'
import {UserAuth} from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const SignIn = () => { 
  const{ googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  
  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();
    } catch(error){
      console.log(error)
    }
  };

  useEffect(() => {
    if(user != null){
      navigate('/account')
    }
  },[user])
  
  return(
    <div className="signin">
      <h1 className='signintitle'>Sign In</h1>
      <GoogleButton className="GoogleButton" type="dark" onClick={handleGoogleSignIn}/>
    </div>
  )
  
}
export default SignIn;