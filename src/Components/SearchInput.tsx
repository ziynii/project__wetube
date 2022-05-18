import React, { ChangeEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ISearchProps {
  onSearch: (query: string) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
}

const Search = styled.form`
  text-align: center;
  flex-basis: 60%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 16px;
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
  right: 16px;
  top: 16px;
  color: ${(props) => props.theme.subTextColor};
  cursor: pointer;
`;

const SearchInput = ({ onSearch, setKeyword, keyword }: ISearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(keyword);
    navigate('/');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
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
    <Search>
      <Input
        value={keyword}
        ref={inputRef}
        placeholder="Search"
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
      <SubmitBtn onClick={onClick}>
        <i className="fas fa-search"></i>
      </SubmitBtn>
    </Search>
  );
};

export default SearchInput;
