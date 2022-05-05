import React from "react";
import { HomeStyled } from "./styles/Home.styled";
import NotesGroup from "./NotesGroup";
import useFetch from "../useFetch";
import { NoteThumbnail } from "models/NoteThumbnail.model";

const Home = () => {
  const username = "Jimmy";
  const { data: notes } = useFetch("http://localhost:5000/noteThumbnails");
  return (
    <HomeStyled>
      <div className="hello">Hello {username}</div>
      {notes && <NotesGroup title="All Notes" thumbnails={notes} />}
    </HomeStyled>
  );
};

export default Home;
