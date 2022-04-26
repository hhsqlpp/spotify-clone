import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import fetchAlbum from '../redux/actions/album';
import TrackItem from '../components/TrackItem';
import UserIcon from '../assets/user.png';

const Album: FC = () => {
    const { id } = useParams();
    const { album, loading } = useTypedSelector((state) => state.album);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchAlbum(id) as any);
        }
    }, [id]);

    return (
        <>
            {!loading ? (
                <div className='album-page'>
                    <div className='container'>
                        <h1 className='album-page__title'>Страница Альбома</h1>
                        <div className='album-page-info'>
                            <img
                                className='album-page-info__photo'
                                src={`http://localhost:5000/${album.picture}`}
                                alt={album.name}
                            />
                            <div className='album-page-info__right'>
                                <p className='album-page-info__right-name'>{album.name}</p>
                                <div className='album-page-info__right-bottom'>
                                    <img src={UserIcon} alt='' />
                                    <span>{album.artist}</span>{' '}
                                    <span>{album.tracks.length} треков</span>
                                </div>
                            </div>
                        </div>
                        <h2>Треки из альбома</h2>
                        <div className='album-page__tracks'>
                            {album.tracks.map((track, i: number) => {
                                return (
                                    <TrackItem
                                        key={track._id}
                                        track={track}
                                        active={false}
                                        number={i}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Album;
