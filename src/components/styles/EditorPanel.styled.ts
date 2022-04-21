import styled from "styled-components";

export const EditorPanelStyled = styled.div`
  & {
    width: 40vw;
    height: fit-content;
    margin: auto;
    margin-top: 100px; /* maybe 100px padding on content selector instead? */
    border-width: 0px 1px 0px 1px;
    border-style: solid;
    border-color: #dddddd;
    padding: 12px 24px 12px 24px;
  }

  .editorButtonActive {
    background-color: coral;
  }

  .editorButtonInactive {
    background-color: white;
  }

  .editorIcon {
    padding: 5px;
  }

  code {
    font-family: monospace;
    background-color: #eee;
    padding: 3px;
  }

  blockquote {
    background-color: #eee;
    padding: 3px;
    font-style: italic;
  }
`;
