import React, { FC, useState } from 'react';
import { ITrack } from '../types/tracks';
import PlayImage from '../assets/play-button.svg';
import PauseImage from '../assets/pause-button.svg';
import { Link } from 'react-router-dom';
import { playTrack, setActive } from '../redux/actions/player';
import { useDispatch } from 'react-redux';
import addListen from '../helpers/add-listen';

interface IProps {
    track: ITrack;
    number: number;
    active: boolean;
}

const TrackItem: FC<IProps> = ({ track, number, active }) => {
    const dispatch = useDispatch();
    const [listens, setListens] = useState<number>(track.listens);

    const play = () => {
        dispatch(setActive(track));
        dispatch(playTrack());
        addListen(track._id);
        setListens(listens + 1);
    };

    return (
        <div className='tracks-list__item'>
            <span className='tracks-list__item-index'>{++number}</span>
            <img src={`http://localhost:5000/${track.picture}`} alt='' />
            <div className='tracks-list__item-name'>
                <p className='tracks-list__item-name__title'>{track.name}</p>
                <p className='tracks-list__item-name__artist'>{track.artist}</p>
            </div>
            <p className='tracks-list__item-album'>
                <Link to={`/albums/${track.album_id}`}>{track.album_name}</Link>
            </p>
            <p className='tracks-list__item-listens'>{listens}</p>
            <p className='tracks-list__item-time'>3:48</p>
            <span className='tracks-list__item-state' onClick={play}>
                <img src={active ? PauseImage : PlayImage} alt='' />
            </span>
        </div>
    );
};

export default TrackItem;
