import React, { useContext, useState, ChangeEvent, FormEvent } from 'react';
import noteContext from '../context/noteContext';
import { INewNote } from '../context/NoteState';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const AddNote: React.FC = () => {
  const context = useContext(noteContext);
  const navigate = useNavigate();

  // to get isPinned from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isPinned = queryParams.get('isPinned');
  const { id } = useParams<{ id: string }>();

  const page = location.pathname.slice(1).split('-')[0];
  const capitalizedPage = page.charAt(0).toUpperCase() + page.slice(1);

  if (!context) {
    throw new Error('noteContext must be used within a NoteProvider');
  }

  let existingNote = null;
  if (page === 'edit') {
    existingNote = context.notes.find((note) => note._id === id);
  }

  const { addNote, updateNote } = context;

  const [note, setNote] = useState<INewNote>({
    title: existingNote ? existingNote.title : '',
    content: existingNote ? existingNote.content : '',
    tagString: existingNote ? existingNote.tags.join(', ') : '',
    isPinned: existingNote ? existingNote.isPinned : isPinned === 'true',
  });

  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (page === 'edit' && id) {
      updateNote(id, note);
    } else {
      addNote(note);
    }
    navigate('/');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className='container my-3'>
      <h2>{capitalizedPage} a Note</h2>
      <form className='my-3'>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            name='title'
            aria-describedby='emailHelp'
            onChange={onChange}
            value={note.title} // Controlled component
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='content' className='form-label'>
            Content
          </label>
          <input
            type='text'
            className='form-control'
            id='content'
            name='content'
            onChange={onChange}
            value={note.content} // Controlled component
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='tagString' className='form-label'>
            Tags (Separated by comma)
          </label>
          <input
            type='text'
            className='form-control'
            id='tagString'
            name='tagString'
            onChange={onChange}
            value={note.tagString}
          />
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='isPinned'
            name='isPinned'
            onChange={onChange}
            checked={note.isPinned}
          />
          <label className='form-check-label' htmlFor='isPinned'>
            Pin?
          </label>
        </div>
        <button type='submit' className='btn btn-primary' onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
