import React, { useState, ReactNode } from 'react';
import NoteContext from './noteContext';
import { INote } from '../components/NoteCard';

interface NoteStateProps {
  children: ReactNode;
}

export interface INewNote {
  title: string;
  content: string;
  tagString: string;
  isPinned: boolean;
}

const NoteState: React.FC<NoteStateProps> = (props) => {
  const notesInitial: INote[] = [];

  const [notes, setNotes] = useState<INote[]>(notesInitial);
  const host = 'http://localhost:3000/i-notebook/api/v1';
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWM4ZmE0ZjQwY2RlNTA2MmQ3NjUzOCIsImlhdCI6MTcyNjc3OTMwMCwiZXhwIjoxNzI3OTg4OTAwfQ.pK77ntildYonuviEZNoWN6_rUBXBQh5TY6Im9Wb2WnA';

  const getNotes = async () => {
    const url = `${host}/note/get-all-notes/`;
    const token = localStorage.getItem('inotebook-token');

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) {
      console.log('Error: ', response);
      return;
    }

    const data = await response.json();
    const notes = data.data._notes;

    setNotes(notes);
    localStorage.setItem('inotebook-token', data.data._token);
  };

  // Add a new note
  const addNote = async (note: INewNote) => {
    const tags = note.tagString.split(',').map((tag) => tag.trim());

    const url = `${host}/note/create-note`;
    const token = localStorage.getItem('inotebook-token') || '';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        title: note.title,
        content: note.content,
        tags: tags,
        isPinned: note.isPinned,
      }),
    });

    const data = await response.json();
    const newNote = data.data._note;

    const noteNew: INote = newNote;
    setNotes([...notes, noteNew]);
    localStorage.setItem('inotebook-token', data.data._token);
  };

  // Delete a note
  const deleteNote = async (id: string) => {
    const url = `${host}/note/delete-note/${id}`;
    const token = localStorage.getItem('inotebook-token') || '';

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });

    const newNotes = notes.filter((note) => note._id !== id);
    const data = await response.json();

    setNotes(newNotes);
    localStorage.setItem('inotebook-token', data.data._token);
  };

  // Update a note
  const updateNote = async (id: string, note: INewNote) => {
    const tags = note.tagString.split(',').map((tag) => tag.trim());

    const url = `${host}/note/update-note/${id}`;
    const token = localStorage.getItem('inotebook-token') || '';

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        title: note.title,
        content: note.content,
        tags: tags,
        isPinned: note.isPinned,
      }),
    });

    if (response.ok) {
      const updatedNotes = notes.map((n) =>
        n._id === id
          ? {
              ...n,
              title: note.title,
              content: note.content,
              tags: tags,
              updatedDate: new Date().toISOString(),
              isPinned: note.isPinned,
            }
          : n
      );

      const data = await response.json();

      setNotes(updatedNotes);
      localStorage.setItem('inotebook-token', data.data._token);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, updateNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
