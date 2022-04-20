import styled from "styled-components";

export const NoteStyled = styled.div`
  & {
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 200px;
    background-color: var(--secondary);
    border-radius: 10px;
    padding: 18px;
    box-sizing: border-box;
    color: white;
    box-shadow: 2px 2px 5px var(--dark-gray);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 2px 12px 8px var(--dark-gray);
    transform: translateY(-10px);
  }

  .title {
    font-size: 24px;
    text-align: center;
  }

  .words {
    font-size: 11px;
  }

  .progress-bar-wrap {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background-color: var(--primary);
    margin: 3px 0;
  }

  .progress-bar-wrap,
  .progress-bar {
    height: 6px;
    border-radius: 3px;
  }

  .progress-bar {
    background-color: var(--accent);
  }

  .excerpt {
    font-size: 11px;
    flex-grow: 1;
    overflow: hidden;
  }

  .expand {
    color: white;
    font-size: 20px;
  }

  .expand:hover {
    color: var(--dark-gray);
  }
`;
