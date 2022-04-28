import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Tracks, Track, Albums, Album, CreateAlbum } from './pages';
import { Player } from './components';

const App: FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<CreateAlbum />} />
                <Route path='/tracks' element={<Tracks />} />
                <Route path='/albums' element={<Albums />} />
                <Route path='/tracks/:id' element={<Track />} />
                <Route path='/albums/:id' element={<Album />} />
            </Routes>
            <Player />
        </Router>
    );
};

export default App;
