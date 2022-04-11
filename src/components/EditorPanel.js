import React, { useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

// This is a modified example from https://github.com/ianstormtaylor/slate/blob/main/site/examples/plaintext.tsx
// if I paste many lines the panel itself becomes scrollable, but I'd like it to extend so that the page is scrollable

const PlainTextExample = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <div className="editorWindow">
      <div className="editorPanel">
        <Slate editor={editor} value={initialValue}>
          <Editable placeholder="Start typing ... " />
        </Slate>
      </div>
    </div>
  );
};

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default PlainTextExample;
