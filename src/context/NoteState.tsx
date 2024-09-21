import React, { useState, ReactNode } from 'react';
import NoteContext from './noteContext';
import { INote } from '../components/NoteCard';

interface NoteStateProps {
  children: ReactNode;
}

export const notesInitial: INote[] = [
  {
    _id: '61322f19553781a8ca8d0e06',
    user: '6131dc5e3e4037cd4734a066',
    title: 'My Title',
    content: 'Please wake up early',
    tags: ['personal'],
    createdDate: '2021-09-03T14:20:09.509Z',
    updatedDate: '2021-09-03T14:20:09.509Z',
    isPinned: true,
  },
  {
    _id: '61322f19553781a8ca8d0e08',
    user: '6131dc5e3e4037cd4734a066',
    title: 'My Title',
    content: 'Please wake up early',
    tags: ['personal'],
    createdDate: '2021-09-03T14:20:09.509Z',
    updatedDate: '2021-09-03T14:20:09.509Z',
    isPinned: true,
  },
  {
    _id: '61322f19553781a8ca8d0e10',
    user: '6131dc5e3e4037cd4734a066',
    title: 'My Title',
    content: 'Please wake up early',
    tags: ['personal'],
    createdDate: '2021-09-03T14:20:09.509Z',
    updatedDate: '2021-09-03T14:20:09.509Z',
    isPinned: true,
  },
  {
    _id: '61322f19553781a8ca8d0e11',
    user: '6131dc5e3e4037cd4734a066',
    title: 'My Title',
    content: 'Please wake up early',
    tags: ['personal'],
    createdDate: '2021-09-03T14:20:09.509Z',
    updatedDate: '2021-09-03T14:20:09.509Z',
    isPinned: true,
  },
  {
    _id: '61322f19553781a8ca8d0e12',
    user: '6131dc5e3e4037cd4734a066',
    title: 'My Title',
    content: 'Please wake up early',
    tags: ['personal'],
    createdDate: '2021-09-03T14:20:09.509Z',
    updatedDate: '2021-09-03T14:20:09.509Z',
    isPinned: true,
  },
  {
    _id: '61322f19553781a8ca8d0e13',
    user: '6131dc5e3e4037cd4734a066',
    title: 'My Title',
    content: 'Please wake up early',
    tags: ['personal'],
    createdDate: '2021-09-03T14:20:09.509Z',
    updatedDate: '2021-09-03T14:20:09.509Z',
    isPinned: true,
  },
  {
    _id: '61322f19553781a8ca8d0e14',
    user: '6131dc5e3e4037cd4734a066',
    title: 'My Title',
    content: 'Please wake up early',
    tags: ['personal'],
    createdDate: '2021-09-03T14:20:09.509Z',
    updatedDate: '2021-09-03T14:20:09.509Z',
    isPinned: true,
  },
];

const NoteState: React.FC<NoteStateProps> = (props) => {
  const [notes, setNotes] = useState<INote[]>(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
