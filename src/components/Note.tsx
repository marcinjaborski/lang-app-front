import React from "react";
import { NoteStyled } from "./styles/Note.styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NoteThumbnail } from "models/NoteThumbnail.model";

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
type NoteProps = {
  thumbnail: NoteThumbnail;
}

const Note = ({thumbnail} : NoteProps) => {
  
  return (
    <NoteStyled>
      <div className="title">{thumbnail.title}</div>
      <div className="progress">
        <div className="words">{thumbnail.words} words</div>
        <div className="progress-bar-wrap">
          <div className="progress-bar" style={{ width: `${thumbnail.progress}%` }} />
        </div>
      </div>
      <div className="excerpt">{thumbnail.excerpt}</div>
      <FontAwesomeIcon icon={faChevronDown} className="expand" />
    </NoteStyled>
  );
};

export default Note;
