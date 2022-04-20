import styled from "styled-components";

export const NotesGroupStyled = styled.div`
  & {
    margin: 10px 20px;
  }

  .groupTitle {
    font-size: 1.5em;
    width: 300px;
    border-bottom: 1px solid var(--light-gray);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
  }

  .notes {
    margin-top: 10px;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .add {
    width: 50px;
    height: 50px;
    background-color: var(--light-gray);
    border-radius: 50%;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .add > svg {
    font-size: 30px;
  }
`;
