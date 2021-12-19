import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  margin: 20px 60px;
  position: fixed;
  top: 80px;
  left: 0;
`;

const Items = styled.ul`
  margin-bottom: 48px;
  color: ${(props) => props.theme.subTextColor};
`;

const NavSubTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 18px;
`;

const Item = styled.li`
  font-size: 20px;

  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
		font-weight: 400;
  }
  svg {
    width: 40px;
    text-align: center;
    font-size: 18px;
    margin-right: 12px;
  }
`;

const Logout = styled.button`
	position: fixed;
	bottom: 40px;
	outline: 0;
	border: 0;
	background-color: transparent;
	color : ${(props) => props.theme.subTextColor};
`;

const SideNav = () => {
  return (
    <Wrapper>
      <Items>
        <NavSubTitle>MENU</NavSubTitle>
        <Item>
          <i className="fas fa-home"></i>Home
        </Item>
        <Item>
          <i className="fas fa-burn"></i> Trending
        </Item>
        <Item>
          <i className="fab fa-youtube"></i>Subscription
        </Item>
      </Items>
      <Items>
        <NavSubTitle>LIBRARY</NavSubTitle>
        <Item>
          <i className="fas fa-history"></i>History
        </Item>
        <Item>
          <i className="fas fa-heart"></i>Likes Videos
        </Item>
        <Item>
          <i className="fas fa-clock"></i>Watch later
        </Item>
      </Items>
      <Logout> <i className="fas fa-sign-out-alt"></i> Logout</Logout>
    </Wrapper>
  );
};
export default SideNav;
