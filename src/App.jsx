import { Routes, Route, useNavigate} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Player from './pages/Player';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';


function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log('Logged In');
        navigate('/')
      }else{
        console.log("Logged Out");
        navigate('/login')
      }
    })
  },[])

  return (
    <div className="bg-black min-h-screen">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
    </div>
  );
}

export default App;
