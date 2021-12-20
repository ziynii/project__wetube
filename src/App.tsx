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
`;

const Main = styled.div<{ openNav: boolean }>`
  margin-left: ${(props) => (props.openNav ? '260px' : 0)};
`;

interface IYoutube {
  youtube: {
    mostPopular: () => any;
    search: (query: string) => any;
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

  const search = (query: string) => {
    youtube
      .search(query) //
      .then((videos: []) => setVideos(videos));
    setIsQuery(query);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos: []) => setVideos(videos));
  }, []);

  return (
    <BrowserRouter>
      <Header setOpenNav={setOpenNav} onSearch={search} />
      <Layout>
        <Side>{openNav ? <SideNav /> : null}</Side>
        <Main openNav={openNav}>
          <Routes>
            <Route
              path="/"
              element={<Home isQuery={isQuery} openNav={openNav} videos={videos} />}
            />
            <Route path="/detail/:videoId" element={<Detail />} />
          </Routes>
        </Main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
