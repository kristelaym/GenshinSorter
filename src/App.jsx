import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import CharacterPage from './CharacterPage';
import CharacterDetails from './CharacterDetails';
import SignIn from './SignIn';
import Account from './Account';
import Protected from './Protected';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './AuthContext';


export default function App() { 
  return (


    
    <Router>
      <AuthContextProvider>
        <div className="App">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/characters" element={<CharacterPage />} />
              <Route path="/characters/:id" element={<CharacterDetails />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/account" element={<Protected><Account /></Protected>} />
            </Routes>
            
          </div>
            <Navbar />
        </div>
      </AuthContextProvider>
    </Router>
  );
}

