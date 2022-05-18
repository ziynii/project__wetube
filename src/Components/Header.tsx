import '@fortawesome/fontawesome-free/js/all.js';
import styled from 'styled-components';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

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

  @media all and (max-width: 1023px) {
    padding: 20px 20px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-basis: 20%;
  align-items: center;
  margin-top: 4px;
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
`;

const HeaderRight = styled.div`
  flex-basis: 15%;
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

const Login = styled.button`
  flex-basis: 5%;
  padding: 10px 0;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.accentColor};
  color: white;

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
        <SearchInput
          setKeyword={setKeyword}
          onSearch={onSearch}
          keyword={keyword}
        />
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
