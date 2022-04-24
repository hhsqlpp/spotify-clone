import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import fetchTracks from '../redux/actions/tracks';
import TrackItem from '../components/TrackItem';

const Tracks: FC = () => {
    const { tracks, loading } = useTypedSelector((state) => state.tracks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracks() as any);
    }, []);

    return (
        <div className='tracks'>
            <div className='container'>
                <h1 className='tracks__title'>Список треков</h1>
                <div className='tracks-list'>
                    {tracks.map((track, i) => {
                        return (
                            <TrackItem track={track} key={track._id} number={i} active={false} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tracks;
