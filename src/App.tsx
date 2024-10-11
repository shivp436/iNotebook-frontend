import './styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NoteState from './context/NoteState';
import AddNote from './pages/AddNote';
import Login from './pages/Login';
import Register from './pages/Register';
import Private from './components/Private';
import Public from './components/Public';

function App() {
  return (
    <>
      <Router>
        <NoteState>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/login' element={<Public element={<Login />} />} />
              <Route
                path='/register'
                element={<Public element={<Register />} />}
              />
              <Route path='/' element={<Private element={<Home />} />} />
              <Route
                path='create-note'
                element={<Private element={<AddNote />} />}
              />
              <Route
                path='edit-note/:id'
                element={<Private element={<AddNote />} />}
              />
            </Routes>
          </div>
        </NoteState>
      </Router>
    </>
  );
}

export default App;
