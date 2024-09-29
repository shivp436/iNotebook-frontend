import NoteSection from '../components/NotesSection';
import { useContext, useEffect } from 'react';
import NoteContext, { NoteContextType } from '../context/noteContext';

function Home() {
  const context = useContext(NoteContext) as NoteContextType;
  const { notes, getNotes } = context;

  if (!context) {
    return null;
  }

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NoteSection notes={notes} title='Pinned Notes' isPinned={true} />
      <NoteSection notes={notes} title='All Notes' isPinned={false} />
    </div>
  );
}

export default Home;
