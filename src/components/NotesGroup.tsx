import React from "react";
import { NotesGroupStyled } from "./styles/NotesGroup.styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Note from "./Note";
import { NoteThumbnail } from "models/NoteThumbnail.model";

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
type NotesGroupProps = {
  title: string;
  thumbnails: NoteThumbnail[];
}

const NotesGroup = ({title, thumbnails} : NotesGroupProps) => {
  return (
    <NotesGroupStyled>
      <div className="groupTitle">
        {title}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="notes">
        {thumbnails.map((noteThumbnail: NoteThumbnail ) => (
          <Note thumbnail={noteThumbnail} key={noteThumbnail.id} />
        ))}
        <div className="add">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </NotesGroupStyled>
  );
};

export default NotesGroup;
