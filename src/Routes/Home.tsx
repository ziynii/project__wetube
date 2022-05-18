import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IVideo } from '../App';
import VideoItem from '../Components/VideoItem';

const Wrapper = styled.div`
  padding: 20px 60px;

	@media all and (max-width: 767px) {
    padding: 20px 20px;
  }
`;

const Vidoelist = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  row-gap: 24px;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const VidoeListTitle = styled.h3`
  color: ${(props) => props.theme.subTextColor};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  span {
    color: ${(props) => props.theme.mainTextColor};
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
            <Link to={`/detail/${video.id}`} key={video.id}>
              <VideoItem video={video} openNav={openNav} />
            </Link>
          ))}
        </Vidoelist>
      </Wrapper>
    </>
  );
};

export default Home;
