import { useMemo } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";

const Test = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  // Update the initial content to be pulled from Local Storage if it exists.
  const initialValue = useMemo(
    JSON.parse(localStorage.getItem("content")) || [
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
    ],
    []
  );

  return (
    <Slate
      editor={editor}
      value={initialValue}
      onChange={(value) => {
        const isAstChange = editor.operations.some((op) => "set_selection" !== op.type);
        if (isAstChange) {
          // Save the value to Local Storage.
          const content = JSON.stringify(value);
          localStorage.setItem("content", content);
        }
      }}
    >
      <Editable />
    </Slate>
  );
};

export default Test;
