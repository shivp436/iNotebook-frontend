/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';

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
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    console.log(target.id);
  };

  return (
    <div className='container'>
      <Card onClick={handleClick} id={note._id}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>
            {note.content}
            {note._id}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteCard;
