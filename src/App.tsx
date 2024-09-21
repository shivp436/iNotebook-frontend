import './styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NoteState from './context/NoteState';

function App() {
  return (
    <>
      <Router>
        <NoteState>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </NoteState>
      </Router>
    </>
  );
}

export default App;
