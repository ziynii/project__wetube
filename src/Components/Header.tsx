import '@fortawesome/fontawesome-free/js/all.js';
import styled from 'styled-components';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import { useState } from 'react';
import Overlay from './Overlay';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  position: fixed;
  top: 0;
  z-index: 500;
  background-color: white;

  @media all and (max-width: 767px) {
    padding: 20px 20px;
  }
`;

const DSearchWrap = styled.div`
  width: 100%;

  @media all and (max-width: 767px) {
    display: none;
  }
`;

const MSearchWrap = styled.div`
  display: none;
  width: 100%;

  form {
    position: absolute;
    top: 160px;
    left: 50%;
    transform: translateX(-50%);
  }

  input {
    background-color: rgba(255, 255, 255, 0.9);
  }

  @media all and (max-width: 767px) {
    display: block;
  }
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

  @media all and (max-width: 1023px) {
    img {
      margin-left: 12px;
      width: 75px;
    }

    button {
      font-size: 14px;
    }
  }

  @media all and (max-width: 767px) {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-left: 0;
    }
  }
`;

const HeaderRight = styled.div`
  flex-basis: 20%;
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

  @media all and (max-width: 1023px) {
    svg {
      font-size: 14px;
      margin-right: 6px;
    }

    svg:last-child {
      margin-right: 0;
    }
  }
`;

const DIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const MIcon = styled.div`
  display: none;
  text-align: right;

  @media all and (max-width: 767px) {
    display: block;
  }
`;

const IconButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`;

const Login = styled.button`
  width: 96px;
  padding: 10px 0;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.accentColor};
  border: 1px solid ${(props) => props.theme.accentColor};
  color: white;

  &:hover {
    color: ${(props) => props.theme.accentColor};
    background-color: ${(props) => props.theme.bgColor};
    transition: all 200ms ease-in-out;
  }

  @media all and (max-width: 1023px) {
    display: none;
  }
`;

interface IHeaderProps {
  setOpenNav: (prev: any) => void;
  onSearch: (query: string) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
  popular: () => void;
}

const Header = ({
  setOpenNav,
  onSearch,
  keyword,
  setKeyword,
  popular,
}: IHeaderProps) => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <Wrapper>
        <HeaderLeft>
          <button onClick={() => setOpenNav((prev: boolean) => !prev)}>
            <i className="fas fa-align-left"></i>
          </button>
          <Link to="/" onClick={popular}>
            <img src={logo} alt="youtube 로고" />
          </Link>
        </HeaderLeft>

        <DSearchWrap>
          <SearchInput
            setKeyword={setKeyword}
            onSearch={onSearch}
            keyword={keyword}
            setOpenSearch={setOpenSearch}
          />
        </DSearchWrap>
        <MSearchWrap>
          {openSearch ? (
            <>
              <SearchInput
                setKeyword={setKeyword}
                onSearch={onSearch}
                keyword={keyword}
                setOpenSearch={setOpenSearch}
              />
              <Overlay setOpenSearch={setOpenSearch} />
            </>
          ) : null}
        </MSearchWrap>
        <HeaderRight>
          <DIcon>
            <IconButton>
              <i className="far fa-plus-square"></i>
            </IconButton>
            <IconButton>
              <i className="far fa-heart"></i>
            </IconButton>
            <IconButton>
              <i className="far fa-bell"></i>
            </IconButton>
          </DIcon>
          <MIcon>
            <IconButton onClick={() => setOpenSearch(true)}>
              <i className="fas fa-search"></i>
            </IconButton>
          </MIcon>
        </HeaderRight>
        <Login>Sign in</Login>
      </Wrapper>
    </>
  );
};

export default Header;
