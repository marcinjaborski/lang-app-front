import { useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const EditorPanel = () => {
  const { id = "" } = useParams();
  const { data: note, isPending } = useFetch(`http://localhost:5000/notes/${id}`);
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: isPending ? "" : note.excerpt }],
    },
  ];
  return (
    <div className="editorPanel">
      <div className="editorTitle">{isPending ? "" : note.title}</div>
      <Slate editor={editor} value={initialValue}>
        <Editable />
      </Slate>
    </div>
  );
};

export default EditorPanel;
