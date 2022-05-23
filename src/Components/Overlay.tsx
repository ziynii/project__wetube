import React from 'react';
import styled from 'styled-components';

interface IOverlayProps {
  setOpenSearch: (value: boolean) => void;
}

const OverlayBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Overlay = ({ setOpenSearch }: IOverlayProps) => {
  return <OverlayBack onClick={() => setOpenSearch(false)} />;
};

export default Overlay;
