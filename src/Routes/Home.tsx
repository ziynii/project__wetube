import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import { IVideo } from '../App';
import VideoItem from '../Components/VideoItem';

const Wrapper = styled.div`
  padding: 20px 60px;
`;

const Vidoelist = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 16px;
`;

const VidoeListTitle = styled.h3`
  color: ${(props) => props.theme.subTextColor};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
  text-transform: uppercase;
  span {
		color : ${(props) => props.theme.mainTextColor};
    font-weight: bold;
  }
`;

export interface IVideosProps {
  videos: IVideo[];
  openNav: boolean;
  isQuery: string | undefined;
}

const Home = ({ videos, openNav, isQuery }: IVideosProps) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Wetube</title>
        </Helmet>
      </HelmetProvider>
      <Wrapper>
        {isQuery ? (
          <VidoeListTitle>
            <span>'{isQuery}'</span> 의 검색결과 입니다.
          </VidoeListTitle>
        ) : (
          <VidoeListTitle>most popular</VidoeListTitle>
        )}
        <Vidoelist>
          {videos.map((video) => (
            <VideoItem video={video} key={video.id} openNav={openNav} />
          ))}
        </Vidoelist>
      </Wrapper>
    </>
  );
};

export default Home;
