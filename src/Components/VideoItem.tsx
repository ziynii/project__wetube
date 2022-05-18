import React from 'react';
import styled from 'styled-components';
import { IVideo } from '../App';

interface IVideoListProps {
  video: IVideo;
  openNav: boolean;
}

const Video = styled.li`
  cursor: pointer;
  width: 100%;
  img {
    border-radius: 4px;
    width: 100%;
    box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.8);
    transition: transform 200ms ease-in;
    &:hover {
      transform: scale(1.02);
    }
  }
  @media all and (max-width: 1023px) {
    width: 100%;
  }
`;

const VideoTitle = styled.h5`
  color: ${(props) => props.theme.mainTextColor};
  font-weight: 400;
  font-size: 16px;
  margin-top: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ChannelTitle = styled.p`
  color: ${(props) => props.theme.subTextColor};
  font-size: 14px;
  margin-top: 8px;
`;

const VideoItem = ({ video, openNav }: IVideoListProps) => {
  return (
    <Video>
      <img src={video.snippet.thumbnails.medium.url} alt="비디오 썸네일" />
      <VideoTitle>{video.snippet.title}</VideoTitle>
      <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
    </Video>
  );
};

export default VideoItem;
