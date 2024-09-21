import NoteSection from '../components/NotesSection';
import { useContext } from 'react';
import NoteContext, { NoteContextType } from '../context/noteContext';
import { notesInitial } from '../context/NoteState';

function Home() {
  const context = useContext(NoteContext) as NoteContextType;
  const { notes } = context;

  return (
    <div>
      <NoteSection notes={notesInitial} title='Pinned Notes' />
      <NoteSection notes={notesInitial} title='All Notes' />
      <NoteSection notes={notes} title='Notes Context' />
    </div>
  );
}

export default Home;
