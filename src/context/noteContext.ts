import { createContext } from 'react';
import { INote } from '../components/NoteCard';

export interface NoteContextType {
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export default NoteContext;
