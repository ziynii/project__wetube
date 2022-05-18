import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IChannel, IVideo } from '../App';
import VideoItem from '../Components/VideoItem';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface IDetailProps {
  videos: IVideo[];
  openNav: boolean;
  channel: (channelId: string) => any;
  channelInfo: IChannel[];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;

  @media all and (max-width: 1023px) {
    flex-direction: column;
    padding: 0px 16px;
  }
`;

const ColLeft = styled.div<{ openNav: boolean }>`
  flex-basis: ${(props) => (props.openNav ? '75%' : '75%')};
  padding-left: ${(props) => (props.openNav ? '20px' : '60px')};

  @media all and (max-width: 1023px) {
    padding-left: 0px;
  }
`;

const ColRight = styled.div<{ openNav: boolean }>`
  flex-basis: ${(props) => (props.openNav ? '20%' : '24%')};
  padding-right: 60px;
  li {
    padding-bottom: 9px;
    margin-bottom: 18px;
    border-bottom: 1px solid lightgray;
    img {
      margin-bottom: 4px;
    }
  }

  @media all and (max-width: 1023px) {
    padding-right: 0px;
  }
`;

const IFrameWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const IFrame = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
  color: ${(props) => props.theme.mainTextColor};
`;

const Time = styled.p`
  margin-top: 4px;
  color: ${(props) => props.theme.subTextColor};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 24px 0;
  margin-top: 24px;
  .channel__layout {
    display: flex;
    align-items: center;
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 8px;
  }
`;

const ChannelTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.mainTextColor};
`;

const SubscriptBtn = styled.button`
  padding: 10px 8px;
  border: 0;
  outline: none;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  border-radius: 4px;
  &:hover {
    background-color: black;
  }
`;

const Description = styled.p`
  width: 60%;
  margin: 24px 0px;
  font-size: 14px;
  line-height: 2.4rem;
  span {
    background-color: ${(props) => props.theme.mainTextColor};
    border-radius: 4px;
    color: white;
    padding: 4px 8px;
    font-size: 24px;
    font-weight: 400;
  }

  @media all and (max-width: 1023px) {
    width: 100%;
    border-bottom: 1px solid lightgray;
  }
`;

const Playlist = styled.ul`
  padding: 0px 12px;
  width: 100%;
`;

const Detail = ({ videos, openNav, channel, channelInfo }: IDetailProps) => {
  const { videoId } = useParams();

  const video = videos.find((video) => {
    return video.id === videoId;
  });

  const videoDate = video?.snippet.publishedAt;

  useEffect(() => {
    channel(video?.snippet.channelId! as string);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{video?.snippet.title}</title>
        </Helmet>
      </HelmetProvider>
      <Wrapper>
        <ColLeft openNav={openNav}>
          <IFrameWrap>
            <IFrame
              datatype="text/html"
              src={`https://www.youtube.com/embed/${video?.id}`}
              frameBorder="0"
              allowFullScreen
            ></IFrame>
          </IFrameWrap>
          <Title>{video?.snippet.title}</Title>
          <Time>{videoDate?.replace('T', ' ').substring(0, 10)}</Time>
          <Channel>
            <div className="channel__layout">
              <img
                src={channelInfo[0]?.snippet.thumbnails.default.url}
                alt="채널 썸네일"
              />
              <ChannelTitle>{video?.snippet.channelTitle}</ChannelTitle>
            </div>
            <SubscriptBtn>Subscript</SubscriptBtn>
          </Channel>
          <Description>
            <span>Description</span>
            <br />
            {video?.snippet.description}
          </Description>
        </ColLeft>
        <ColRight openNav={openNav}>
          <Playlist>
            {videos.filter((video) => video.id !== videoId).slice(0, 10).map((video) => (
              <Link to={`/detail/${video.id}`} key={video.id}>
                <VideoItem video={video} openNav={openNav} />
              </Link>
            ))}
          </Playlist>
        </ColRight>
      </Wrapper>
    </>
  );
};

export default Detail;
