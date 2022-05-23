import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import SideNav from './Components/SideNav';
import Detail from './Routes/Detail';
import Home from './Routes/Home';

const Layout = styled.div`
  margin-top: 80px;
`;

const Side = styled.div`
  position: fixed;
  border-right: 1px solid lightgray;
  z-index: 400;
`;

const Main = styled.div<{ openNav: boolean }>`
  margin-left: ${(props) => (props.openNav ? '260px' : 0)};

  @media all and (max-width: 1023px) {
    margin-left: 0;
  }
`;

interface IYoutube {
  youtube: {
    mostPopular: () => any;
    search: (query: string) => any;
    channel: (channelId: string) => any;
  };
}

interface IThumbnails {
  url: string;
  width: number;
  height: number;
}

export interface IVideo {
  id: string;
  snippet: {
    channelTitle: string;
    description: string;
    title: string;
    publishedAt: string;
    channelId: string;
    thumbnails: {
      medium: IThumbnails;
      default: IThumbnails;
    };
  };
}

export interface IChannel {
  id: string;
  snippet: {
    thumbnails: {
      medium: IThumbnails;
      default: IThumbnails;
    };
  };
}

function App({ youtube }: IYoutube) {
  const [openNav, setOpenNav] = useState(true);
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [isQuery, setIsQuery] = useState<string>();
  const [keyword, setKeyword] = useState<string>('');

  const search = (query: string) => {
    youtube
      .search(query) //
      .then((videos: []) => setVideos(videos));
    setIsQuery(query);
  };

  const mostPopulars = () => {
    youtube
      .mostPopular() //
      .then((videos: []) => setVideos(videos));
    setIsQuery('');
    setKeyword('');
  };

  useEffect(() => {
    mostPopulars();
  }, []);

  return (
    <BrowserRouter>
      <Header
        setOpenNav={setOpenNav}
        onSearch={search}
        keyword={keyword}
        setKeyword={setKeyword}
        popular={mostPopulars}
      />
      <Layout>
        <Side>{openNav ? <SideNav popular={mostPopulars} /> : null}</Side>
        <Main openNav={openNav}>
          <Routes>
            <Route
              path="/"
              element={
                <Home isQuery={isQuery} openNav={openNav} videos={videos} />
              }
            />
            <Route
              path="/detail/:videoId"
              element={
                <Detail
                  videos={videos}
                  openNav={openNav}
                  setOpenNav={setOpenNav}
                  youtube={youtube}
                />
              }
            />
          </Routes>
        </Main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
