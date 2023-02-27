import styled from "styled-components";
// import { FaHome } from "react-icons/fa";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  margin: 10px;
  border-radius: 30px;
  flex-direction: row;
  background-color: gray;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 200px;
    margin: 0;
    border-radius: 0;
    height: 100vh;
    position: fixed;
  }
`;

const Logo = styled.img`
  height: 30px;
  width: 130px;
`;

const Icon = styled.img`
  width: 50px;
  border-radius: 30px;
  border: 2px solid #e13f29;
  &:hover {
    transform: scale(0.9);
    transition: transform 2ms ease-in-out;
  }
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

const Nav = ({ setPage }) => {
  return (
    <StyledNav>
      <Logo src="./img/RL back.jpeg" />
      <Button onClick={() => setPage("home")}>
        <img src="./img/RL back.jpeg"" alt="" />
      </Button>
      <Button>
        <img src="./img/RL back.jpeg"" alt="" />
      </Button>
      <Button>
        <img src="./img/RL back.jpeg" alt="" />
      </Button>

      <Icon src="./img/RL back.jpeg" title="Boss Namo" />
    </StyledNav>
  );
};

export default Nav;
