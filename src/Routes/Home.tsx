import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import { IVideo } from '../App';
import { motion } from 'framer-motion';
import VideoItem from '../Components/VideoItem';

const Wrapper = styled.div`
  padding: 20px 60px;
`;

const Vidoelist = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const VidoeListTitle = styled.h3`
  color: ${(props) => props.theme.accentColor};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
	text-transform: uppercase;
`;

export interface IVideosProps {
  videos: IVideo[];
  openNav: boolean;
}

const Home = ({ videos, openNav }: IVideosProps) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Wetube</title>
        </Helmet>
      </HelmetProvider>
      <Wrapper>
        <VidoeListTitle>most popular</VidoeListTitle>
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
