import styled from "styled-components";

export const NavbarStyled = styled.nav`
  & {
    width: 70px;
    height: 100vh;
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .topButtons,
  .bottomButtons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .topButtons {
    margin-top: 10px;
  }

  .bottomButtons {
    margin-bottom: 10px;
  }

  .menuButton {
    width: 50px;
    height: 50px;
    margin: 5px 0;
    border-radius: 10px;
    background-color: var(--secondary-lighter);
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menuButton .menuButtonIcon {
    font-size: 30px;
    color: #3c3c3c;
  }

  .menuButton:hover .menuButtonIcon {
    font-size: 35px;
  }
`;
