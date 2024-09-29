import './styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NoteState from './context/NoteState';
import AddNote from './pages/AddNote';

function App() {
  return (
    <>
      <Router>
        <NoteState>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='create-note' element={<AddNote />} />
              <Route path='edit-note/:id' element={<AddNote />} />
            </Routes>
          </div>
        </NoteState>
      </Router>
    </>
  );
}

export default App;
