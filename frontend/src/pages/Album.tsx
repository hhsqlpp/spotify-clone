import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import fetchAlbum from '../redux/actions/album';
import TrackItem from '../components/TrackItem';
import UserIcon from '../assets/user.png';
import { useState } from 'react';
import { AddTrack } from '../components';

const Album: FC = () => {
    const { id } = useParams();
    const { album, loading } = useTypedSelector((state) => state.album);
    const dispatch = useDispatch();
    const [totalListens, setTotalListens] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            dispatch(fetchAlbum(id) as any);
        }
    }, [id]);

    useEffect(() => {
        let listens: number = 0;

        album.tracks.forEach((track) => {
            listens += track.listens;
        });

        setTotalListens(listens);
    }, [album]);

    return (
        <>
            {!loading ? (
                <div className='album-page'>
                    <div className='container'>
                        <h1 className='album-page__title'>Страница Альбома</h1>
                        <button
                            className='album-page__btn'
                            onClick={() => setModalVisible(!modalVisible)}>
                            Добавить трек
                        </button>
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
                                    <span>{totalListens} прослушиваний</span>
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
                    <AddTrack
                        visible={modalVisible}
                        album_id={album._id}
                        artist={album.artist}
                        setVisible={setModalVisible}
                    />
                </div>
            ) : null}
        </>
    );
};

export default Album;
