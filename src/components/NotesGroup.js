import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Note from "./Note";

const NotesGroup = (props) => {
  const notes = props.notes;
  return (
    <div className='notesGroup'>
      <div className="notesGroupTitle">
        {props.title}
        <FontAwesomeIcon icon={faChevronDown}/>
      </div>
      <div className="notes">
        {notes.map(note => (
          <Note data={note}/>
        ))}
        <div className="notesGroupAdd">
          <FontAwesomeIcon icon={faPlus}/>
        </div>
      </div>
    </div>
  );
};

export default NotesGroup;