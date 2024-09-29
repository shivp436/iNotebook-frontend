import { createContext } from 'react';
import { INote } from '../components/NoteCard';
import { INewNote } from '../context/NoteState';

export interface NoteContextType {
  notes: INote[];
  // setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
  addNote: (note: INewNote) => void;
  deleteNote: (id: string) => void;
  updateNote: (id: string, note: INewNote) => void;
  getNotes: () => void;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export default NoteContext;
