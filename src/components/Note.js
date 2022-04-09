import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Note = (props) => {
  const {title, words, progress, excerpt} = props.data;
  return (
    <div className='note'>
      <div className="noteTitle">{title}</div>
      <div className="noteProgress">
        <div className="noteProgressWords">{words} words</div>
        <div className="noteProgressBarWrap">
          <div className="noteProgressBar" style={{width: `${progress}%`}}/>
        </div>
      </div>
      <div className="noteExcerpt">{excerpt}</div>
      <FontAwesomeIcon icon={faChevronDown} className='noteExpand'/>
    </div>
  );
};

export default Note;