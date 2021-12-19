import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-basis: 20%;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.subTextColor};
  svg {
    font-size: 18px;
    color: ${(props) => props.theme.subTextColor};
		cursor: pointer;
  }
  img {
    width: 100px;
    margin-left: 24px;
  }
`;

const Search = styled.form`
  text-align: center;
  flex-basis: 50%;
  position: relative;
  svg {
    position: absolute;
    right: 50px;
    top: 10px;
    color: ${(props) => props.theme.subTextColor};
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 10px 16px;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 0;
  outline: none;
`;

const HeaderRight = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: flex-end;
  margin-right: 12px;
  svg {
    font-size: 18px;
    margin-right: 12px;
    color: ${(props) => props.theme.subTextColor};
		cursor: pointer;
  }
`;

const Login = styled.button`
  flex-basis: 5%;
  padding: 6px 0;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderLeft>
        <i className="fas fa-align-left"></i>
        <img src="logo.png" alt="youtube 로고" />
      </HeaderLeft>
      <Search>
        <Input placeholder="Search" />
        <i className="fas fa-search"></i>
      </Search>
      <HeaderRight>
        <i className="far fa-plus-square"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-bell"></i>
      </HeaderRight>
      <Login>Sign in</Login>
    </Wrapper>
  );
};

export default Header;
