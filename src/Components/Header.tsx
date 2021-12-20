import React, { FormEvent, useRef } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-basis: 20%;
  align-items: center;
  button {
    outline: none;
    border: 0;
    background-color: transparent;
    font-size: 18px;
    color: ${(props) => props.theme.subTextColor};
    transition: color 200ms ease;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.mainTextColor};
    }
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
`;

const Input = styled.input`
  width: 90%;
  padding: 10px 16px;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 0;
  outline: none;
`;

const SubmitBtn = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  position: absolute;
  right: 50px;
  top: 10px;
  color: ${(props) => props.theme.subTextColor};
  cursor: pointer;
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
    transition: color 200ms ease;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.mainTextColor};
    }
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

interface IHeaderProps {
  setOpenNav: (prev: any) => void;
  onSearch: (query: string) => void;
}

const Header = ({ setOpenNav, onSearch }: IHeaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const value: any = inputRef.current?.value;
    console.log(value);
    onSearch(value);
  };

  const onClick = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSearch();
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <>
      <Wrapper>
        <HeaderLeft>
          <button onClick={() => setOpenNav((prev: boolean) => !prev)}>
            <i className="fas fa-align-left"></i>
          </button>
          <img src="logo.png" alt="youtube 로고" />
        </HeaderLeft>
        <Search>
          <Input ref={inputRef} placeholder="Search" onKeyPress={onKeyPress} />
          <SubmitBtn onClick={onClick}>
            <i className="fas fa-search"></i>
          </SubmitBtn>
        </Search>
        <HeaderRight>
          <i className="far fa-plus-square"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-bell"></i>
        </HeaderRight>
        <Login>Sign in</Login>
      </Wrapper>
    </>
  );
};

export default Header;
