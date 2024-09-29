/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NoteContext, { NoteContextType } from '../context/noteContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export interface INote {
  _id: string;
  title: string;
  content: string;
  user: string;
  tags: string[];
  createdDate: string;
  updatedDate: string;
  isPinned: boolean;
}

interface INoteCardProps {
  note: INote;
}

const NoteCard: React.FC<INoteCardProps> = ({ note }) => {
  const navigate = useNavigate();
  const context = useContext(NoteContext) as NoteContextType;
  if (!context) {
    return null; // or handle the error appropriately
  }
  const { deleteNote } = context;

  const handleDelete = () => {
    deleteNote(note._id);
  };

  const handleEdit = () => {
    navigate(`/edit-note/${note._id}`);
  };

  return (
    <div className='container'>
      <Card>
        <Card.Body>
          <div className='notecard-content' onClick={handleEdit}>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
              {note.content}
              {note._id}
            </Card.Text>
          </div>
          <Button className='mx-1 my-2 bg-light' onClick={handleDelete}>
            <i className='bi bi-trash' />
          </Button>
          <Button className='mx-1 my-2 bg-light' onClick={handleEdit}>
            <i className='bi bi-pencil' />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteCard;
