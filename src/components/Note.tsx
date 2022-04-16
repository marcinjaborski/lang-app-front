import React from "react";
import { NoteStyled } from "./styles/Note.styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Note = (props) => {
  const { title, words, progress, excerpt } = props.data;
  return (
    <NoteStyled>
      <div className="title">{title}</div>
      <div className="progress">
        <div className="words">{words} words</div>
        <div className="progress-bar-wrap">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="excerpt">{excerpt}</div>
      <FontAwesomeIcon icon={faChevronDown} className="expand" />
    </NoteStyled>
  );
};

export default Note;
