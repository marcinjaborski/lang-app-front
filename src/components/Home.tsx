import React from "react";
import { HomeStyled } from "./styles/Home.styled";
import NotesGroup from "./NotesGroup";
import useFetch from "../useFetch";

const Home = () => {
  const username = "Jimmy";
  const { data: notes } = useFetch("http://localhost:5000/notes");
  return (
    <HomeStyled>
      <div className="hello">Hello {username}</div>
      {notes && <NotesGroup title="Recent notes" notes={notes} />}
      {notes && <NotesGroup title="Recent notes" notes={notes} />}
      {notes && <NotesGroup title="Recent notes" notes={notes} />}
      {notes && <NotesGroup title="Recent notes" notes={notes} />}
    </HomeStyled>
  );
};

export default Home;
