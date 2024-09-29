/* eslint-disable react/prop-types */
import NoteCard, { INote } from './NoteCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

interface INoteSection {
  notes: INote[];
  title: string;
  isPinned: boolean;
}

const NoteSection: React.FC<INoteSection> = ({ notes, title, isPinned }) => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h2 className='my-3 border-bottom border-secondary text-center'>
        {title}
      </h2>
      {/* Add A new Note Button */}
      <div className='row d-flex justify-content-start'>
        <div className='col-lg-3 col-md-4 my-3 col-sm-6'>
          <div className='container'>
            <Card>
              <Card.Body className='text-center'>
                <Button
                  // as={Link as unknown as React.FunctionComponent<any>}
                  // to={`/create-note?isPinned=${isPinned}`}
                  onClick={() => navigate(`/create-note?isPinned=${isPinned}`)}
                  className='my-3 bg-light'
                >
                  <i className='bi bi-plus' />
                </Button>
                <Card.Title>Create a new note</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>

        {notes.length === 0 ? (
          <div className='col-lg-3 col-md-4 my-3 col-sm-6'>
            <h3 className='container'>No Notes Found</h3>
          </div>
        ) : (
          notes
            .filter((note) => note.isPinned === isPinned)
            .map((note) => (
              <div className='col-lg-3 col-md-4 my-3 col-sm-6' key={note._id}>
                <NoteCard note={note} />
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default NoteSection;
