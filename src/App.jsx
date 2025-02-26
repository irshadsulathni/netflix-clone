import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Player from './pages/Player';


function App() {
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
