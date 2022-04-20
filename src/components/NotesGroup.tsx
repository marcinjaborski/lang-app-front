import React from "react";
import { NotesGroupStyled } from "./styles/NotesGroup.styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Note from "./Note";

const NotesGroup = (props) => {
  const notes = props.notes;
  return (
    <NotesGroupStyled>
      <div className="groupTitle">
        {props.title}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="notes">
        {notes.map((note) => (
          <Note data={note} key={note.id} />
        ))}
        <div className="add">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </NotesGroupStyled>
  );
};

export default NotesGroup;
