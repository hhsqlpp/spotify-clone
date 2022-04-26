import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import fetchAlbums from '../redux/actions/albums';
import AlbumItem from '../components/AlbumItem';

const Albums: FC = () => {
    const { albums, loading } = useTypedSelector((state) => state.albums);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums() as any);
    }, []);

    return (
        <div className='albums'>
            <div className='container'>
                <h1 className='albums-title'>Список альбомов</h1>
                <div className='albums-list'>
                    {albums.map((album) => {
                        return <AlbumItem key={album._id} album={album} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Albums;
