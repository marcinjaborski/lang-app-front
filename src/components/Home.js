import NotesGroup from "./NotesGroup";
import useFetch from "../useFetch";

const Home = () => {
  const username = 'Jimmy';
  const {data: notes} = useFetch('http://localhost:5000/notes');
  return (
    <div className='home'>
      <div className="hello">
        Hello {username}
      </div>
      {notes && <NotesGroup title='Recent notes' notes={notes}/>}
      {notes && <NotesGroup title='Recent notes' notes={notes}/>}
      {notes && <NotesGroup title='Recent notes' notes={notes}/>}
      {notes && <NotesGroup title='Recent notes' notes={notes}/>}
    </div>
  );
};

export default Home;