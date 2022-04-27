import React, { useCallback, useEffect, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import { Editor, Transforms, createEditor, Element as SlateElement } from "slate";
import { withHistory } from "slate-history";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faUnderline,
  faItalic,
  faCode,
  fa1,
  fa2,
  faQuoteLeft,
  faListOl,
  faList,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
} from "@fortawesome/free-solid-svg-icons";
import { EditorPanelStyled } from "./styles/EditorPanel.styled";

export const Button = ({ active: isActive, onClick, children }) => {
  return (
    <span className={!!isActive ? "editorButtonActive" : "editorBuuttonInactive"} active={isActive} onClick={onClick}>
      {children}
    </span>
  );
};

export const Toolbar = (props) => {
  return <div>{props.children}</div>;
};

export const Icon = ({ icon }) => {
  return (
    <span className="editorIcon">
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </span>
  );
};

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

// TODO : still doesn't work as I would want it to.
// - manually switching off lists is awkward
// - shift enter doesn't work like it is supposed to (at least in quotes)
// - quotes go all the way left, code doesn't. perhaps its okay like that?
// - blocks of code and quotes across multiple lines would be nice

/*
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
*/
const loadNote = async () => {
  console.log("fetching...");
  return fetch("http://localhost:5000/editorNotes/1")
    .then((res) => {
      if (res.ok) return res.json();
      else console.log("res was not ok");
    })
    .then((data) => {
      console.log("Fetched successfully.");
      return data.note;
    });
};

const saveNote = (editor, note) => {
  // TODO : savenote should be called automatically, after say.. 3 seconds of no interaction.
  // the commented-out code below was useful for ignoring selection.
  // Now it was breaking things (no idea why) when saving works on a button click

  // const isAstChange = editor.operations.some((op) => "set_selection" !== op.type);
  // if (isAstChange) {
  fetch("http://localhost:5000/editorNotes/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ note: note }),
  })
    .then(() => console.log("Saved successfully."))
    .catch((err) => console.log(err));

  // }
};

const RichTextExample = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "Loading ..." }],
    },
  ];

  useEffect(() => {
    loadNote().then((note) => {
      editor.children = note;
      editor.onChange();
    });
  }, []);

  return (
    <EditorPanelStyled>
      <Slate
        editor={editor}
        value={initialValue}
        // onChange={(value) => saveNote(editor, value)} // temp: now click to save
      >
        <Toolbar>
          <MarkButton format="bold" icon={faBold} />
          <MarkButton format="italic" icon={faItalic} />
          <MarkButton format="underline" icon={faUnderline} />
          <MarkButton format="code" icon={faCode} />
          <BlockButton format="heading-one" icon={fa1} />
          <BlockButton format="heading-two" icon={fa2} />
          <BlockButton format="block-quote" icon={faQuoteLeft} />
          <BlockButton format="numbered-list" icon={faListOl} />
          <BlockButton format="bulleted-list" icon={faList} />
          <BlockButton format="left" icon={faAlignLeft} />
          <BlockButton format="center" icon={faAlignCenter} />
          <BlockButton format="right" icon={faAlignRight} />
          <BlockButton format="justify" icon={faAlignJustify} />
        </Toolbar>
        <Button onClick={() => saveNote(editor, editor.children)}>SAVE</Button>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Slate>
    </EditorPanelStyled>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type");
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      isActive={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type")}
      onClick={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon icon={icon}></Icon>
    </Button>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      isActive={isMarkActive(editor, format)}
      onClick={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon icon={icon}></Icon>
    </Button>
  );
};

// const initialValue = [
//   {
//     type: "paragraph",
//     children: [{ text: "" }],
//   },
// ];

export default RichTextExample;
