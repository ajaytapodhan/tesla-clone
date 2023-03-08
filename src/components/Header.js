import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/Car/CarSlice";
import { useSelector } from "react-redux";
function Header() {
  const [burgerStatus, setburgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg"></img>
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="#">
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setburgerStatus(true)} />
      </RightMenu>
      <Burgernav show={burgerStatus}>
        <Closewrapper>
          <Customclose onClick={() => setburgerStatus(false)} />
        </Closewrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li>
                <a key={index} href="#">
                  {car}
                </a>
              </li>
            );
          })}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
      </Burgernav>
    </Container>
  );
}

export default Header;
const Container = styled.div`

min-height:60px 
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top :0;
left:0;
right:0;
z-index:1
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
display:flex
align-items:center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const Burgernav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;

  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const Customclose = styled(CloseIcon)`
  cursor: pointer;
`;

const Closewrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
