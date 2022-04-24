import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import fetchTrack from '../redux/actions/track';

const Track: FC = () => {
    const { id } = useParams();
    const { track, loading } = useTypedSelector((state) => state.track);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchTrack(id) as any);
        }
    }, [id]);

    return <div></div>;
};

export default Track;
