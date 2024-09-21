/* eslint-disable react/prop-types */
import NoteCard, { INote } from './NoteCard';

interface INoteSection {
  notes: INote[];
  title: string;
}

const NoteSection: React.FC<INoteSection> = ({ notes, title }) => {
  return (
    <div className='container'>
      <h2 className='my-3 border-bottom border-secondary text-center'>
        {title}
      </h2>
      <div className='row d-flex justify-content-start'>
        {notes.map((note) => {
          return (
            <div className='col-lg-3 col-md-4 my-3 col-sm-6' key={note._id}>
              <NoteCard note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NoteSection;
